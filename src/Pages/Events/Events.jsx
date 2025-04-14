import React, {useEffect, useState} from 'react';

import {Helmet} from "react-helmet";

import './Events.scss';
import db from '../../Firebase/Firebase';
import Loading from '../../Components/Loading/Loading';
import il1 from '../../Assets/il_events1.svg';
import getEvents from '../../Helper/getEvents';
import dateBefore from '../../Helper/dateBefore';
import EventCard from '../../Components/EventCard/EventCard';

function Events() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        getEvents().then(
            (res)=>{
                setEvents(res)
                setLoading(false);
            }
        )
    }, []); 

    // useEffect(() => {console.log(events)}, [events]);

    // console.log(Date.now());
    var curDate = new Date(Intl.DateTimeFormat('en-US').format(Date.now()));
    // console.log(curDate.getDate());

    return (
        loading
        ? <Loading/>
        : 
        <div className="eventsDiv">
            <Helmet>
                <title>COSH Events</title>
            </Helmet>
            <div className="eventsSection1Container">
                <div className="eventsSection1">
                    <h1>Events</h1>
                    <img src={il1} className="il1" alt="Illustration" />
                </div>
            </div>
            <div className="eventsSection2">
                <div className="eventsSection2Container">
                    {
                        events.filter(event => !dateBefore(event['date'].toDate(), curDate)).length === 0
                        ? null :
                        <>
                        <h1>Upcoming events</h1>
                        <div className="eventCardsDiv">
                            {
                                events.map((e, i)=> {
                                    return dateBefore(e['date'].toDate(), curDate) 
                                    ? null
                                    : <EventCard event={e} key={i} /> 
                                })
                            }
                        </div>
                        </>
                    }
                    {
                        events.filter(event => dateBefore(event['date'].toDate(), curDate)).length === 0
                        ? null :
                        <>
                        <h1>Past events</h1>
                        <div className="eventCardsDiv">
                            {
                                events.map((e, i)=> {
                                    return dateBefore(e['date'].toDate(), curDate) 
                                    ? <EventCard event={e} key={i} /> 
                                    : null
                                })
                            }
                        </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Events
