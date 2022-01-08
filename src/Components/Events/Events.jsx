import './Events.scss'

import React, {useEffect} from 'react'

import il1 from '../../Assets/il_events1.svg';

function Events() {

    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className="eventsDiv">
            <div className="eventsSection1">
                <h1>Events</h1>
                <img src={il1} className="il1" alt="Illustration" />
            </div>
            <div className="eventsSection2">

            </div>
        </div>
    )
}

export default Events
