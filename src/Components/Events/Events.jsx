import './Events.scss';

import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import il1 from '../../Assets/il_events1.svg';
import il_arrow from '../../Assets/il_arrow.svg';

function Events() {

    useEffect(() => window.scrollTo(0, 0)); 

    return (
        <div className="eventsDiv">
            <div className="eventsSection1">
                <h1>Events</h1>
                <img src={il1} className="il1" alt="Illustration" />
            </div>
            <div className="eventsSection2">
                <h1>Upcomming events</h1>
                <div className="eventCardsDiv">
                    <EventCard />
                    <EventCard />
                </div>
                <h1>Past events</h1>
                <div className="eventCardsDiv">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </div>
    )
}


function EventCard() {
    const image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"; 
    return (
        <Link to={'/events/1'} className="eventCard">
            <div className="imgDiv" style={{ backgroundImage: `url("${image}")`  }}> </div>
            <div className="contentDiv">
                <p className="category">Event</p>
                <h3>NITK Winter of Code</h3>
                <img src={il_arrow} className="arrow" alt="arrow" />
                <div className="bubble">
                    <h3>Jan</h3>
                    <h3 className="large">5</h3>
                </div>
            </div>
        </Link>
    )
}


export default Events
