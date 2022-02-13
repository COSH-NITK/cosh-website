import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Moment from 'moment';

import './Event.scss';
import FacultyCards from '../../Components/FacultyCards/FacultyCards';
import Loading from '../../Components/Loading/Loading';
import getEvent from '../../Helper/getEvent';

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
            getEvent(id).then(
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
            <div className="eventDivContainer">
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
