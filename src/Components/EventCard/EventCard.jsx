import React from 'react';

import il_arrow from '../../Assets/il_arrow.svg';
import {Link} from 'react-router-dom';

import './EventCard.scss';

function EventCard({
    event = {},
    default_image='https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2FEvents%20images%2Fdefault-event-image.svg?alt=media&token=9756c350-dea2-42f4-a94d-00749c733968',
}) {
    return (
        <Link to={'/events/'+ event.id} state={{ e: {event} }} className="eventCard">
            <div className="imgDiv" style={{ backgroundImage: `url("${event.featured_image ?? default_image}")`  }}> </div>
            <div className="contentDiv">
                <p className="category">{event.category}</p>
                <h3>{event.name}</h3>
                <img src={il_arrow} className="arrow" alt="arrow" />
                <div className="bubble">
                    <h3>{Intl.DateTimeFormat('en-US', {month: 'short'}).format(event.date && event.date.toDate())}</h3>
                    <h3 className="large">{
                    Intl.DateTimeFormat('en-US', {day: '2-digit'}).format(event.date && event.date.toDate())
                    }</h3>
                </div>
            </div>
        </Link>
    )
}

export default EventCard;
