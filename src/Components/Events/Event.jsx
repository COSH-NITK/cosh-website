import React, {useEffect, useState} from 'react'

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Moment from 'moment';

import './Event.scss';
import FacultyCards from '../FacultyCards/FacultyCards'
import db from '../Firebase'
import Loading from '../Loading/Loading'

async function getEvent(db, id) {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    const eventList = eventSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    var event = {};
    for (var i = 0; i < eventList.length; i++) if(eventList[i].id === id) event = eventList[i];
    return event;
  }

function Event() {

    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

        // if(location.state!=null){
        //     const { e } = location.state;
        //     console.log('event', e.event);
        //     // if(e !== {}) {
        //         setEvent(e.event);    
        //         setLoading(false);
        //     // }
        // } else {
            getEvent(db, id).then(
                (event)=>{
                    setEvent(event);
                    setLoading(false);
                }
            )
        // }

    }, [id]);

    return (
        loading
        ? <Loading/>
        : <div className="eventDiv">
            <h1>{event['name']}</h1>
            <hr />
            <p className="desc">{event.description}</p>

            <Subheading title='Date' />
            <p>{event.date && event.date.seconds &&  Moment(event['date'].toDate()).format('D MMM YYYY')}</p>

            <Subheading title='Location' />
            <p>{event['location']}</p>
           
            {
                !event.schedule ? null
                :  <>
                <Subheading title='Schedule' />
                {
                    event.schedule.map((content, i) => <Bullet content={content} key={i} />)
                }
                </>
            }
            
            {
                !event.team ? null
                : <>
                    <Subheading title='Organizing Team' />
                    <FacultyCards people={event.team} />
                </>
            }

    
            <Link to={"/events"} className="button-dark">View all events</Link>
        </div>
    )
}

export default Event

function Subheading({title}){
    return <div className="subheadingRow">
    <div className="point"></div>
    <h2>{title}</h2>
</div>
}
function Bullet({content}){
    return <div className="bulletRow">
    <div className="bullet">
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
    </div>
    <p>{content}</p>
</div>
}
