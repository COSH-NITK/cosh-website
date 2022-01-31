import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import { getFirestore, collection, getDocs, Timestamp, orderBy} from 'firebase/firestore/lite';

import './Events.scss';
import db from '../Firebase'
import Loading from '../Loading/Loading'
import il1 from '../../Assets/il_events1.svg';
import il_arrow from '../../Assets/il_arrow.svg';

async function getEvents(db) {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol, orderBy('date'));
    var eventList = eventSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    // eventSnapshot.docs.map(doc => console.log(doc.id));
    eventList.sort(
        (a, b) => dateBefore(a['date'].toDate(), b['date'].toDate()) ? 1 : -1
    )
    console.log('events', eventList);
    return eventList;
  }

function dateBefore(d, curDate){
    // console.log('comparing: ', d, curDate);
    // console.log(d.getFullYear(), curDate.getFullYear());
    if(d.getFullYear() < curDate.getFullYear()) return true;
    if(d.getFullYear() > curDate.getFullYear()) return false;
    // console.log(d.getMonth(), curDate.getMonth());
    if(d.getMonth() < curDate.getMonth()) return true;
    if(d.getMonth() > curDate.getMonth()) return false;
    // console.log(d.getDate(), curDate.getDate());
    if(d.getDate() < curDate.getDate()) return true;
    return false;
}

function Events() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        getEvents(db).then(
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
        : <div className="eventsDiv">
            <div className="eventsSection1">
                <h1>Events</h1>
                <img src={il1} className="il1" alt="Illustration" />
            </div>
            <div className="eventsSection2">
                {
                    events.filter(event => !dateBefore(event['date'].toDate(), curDate)).length == 0
                    ? null :
                    <>
                    <h1>Upcomming events</h1>
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
                    events.filter(event => dateBefore(event['date'].toDate(), curDate)).length == 0
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
    )
}


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


export default Events
