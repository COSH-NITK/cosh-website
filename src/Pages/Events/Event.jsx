import React, {useEffect, useState} from 'react'

import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";

import './Event.scss';
import FacultyCards from '../../Components/FacultyCards/FacultyCards';
import Loading from '../../Components/Loading/Loading';
import getEvents from '../../Helper/getEvents';

function Event() {

    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

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
            getEvents().then(
                (events)=>{
                    const event = events.find(event => event.id === id);
                    setEvent(event);
                    setLoading(false);
                }
            )
        // }

    }, [id]);

    return (
        loading
        ? <Loading/>
        : <div className="eventDiv justify">
            <div className="eventDivContainer">
                <h1>{event['name']}</h1>
                <hr />

                <div className="body" dangerouslySetInnerHTML={{ __html: event.content }}></div>

                {/* <Subheading title='Date' />
                <p>{event.date && event.date.seconds &&  Moment(event['date'].toDate()).format('D MMM YYYY')}</p>
            
                {
                    !event.schedule ? null
                    :  <>
                    <Subheading title='Schedule' />
                    {
                        event.schedule.map((content, i) => <Bullet content={content} key={i} />)
                    }
                    </>
                } */}
                
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
// function Bullet({content}){
//     return <div className="bulletRow">
//     <div className="bullet">
//         <div className="left"></div>
//         <div className="center"></div>
//         <div className="right"></div>
//     </div>
//     <p>{content}</p>
// </div>
// }
