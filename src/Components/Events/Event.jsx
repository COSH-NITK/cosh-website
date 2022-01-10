import './Event.scss';

import React, {useEffect} from 'react'

import {Link} from 'react-router-dom'
import FacultyCards from '../FacultyCards/FacultyCards'

function Event() {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="eventDiv">
            <h1>This is the event name title</h1>
            <hr />
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. </p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Date and time</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. </p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Location</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. </p>
           
            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Schedule</h2>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Organizing Team</h2>
            </div>
            <FacultyCards />

    
            <Link to={"/events"} className="button-dark">View all events</Link>
        </div>
    )
}

export default Event
