import './Events.scss';

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { getFirestore, collection, getDocs, Timestamp, orderBy} from 'firebase/firestore/lite';

import il1 from '../../Assets/il_events1.svg';
import il_arrow from '../../Assets/il_arrow.svg';

import db from '../Firebase'

import Loading from '../Loading/Loading'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
            </div>
        </div>
    )
}


function EventCard({
    event = {},
    image='https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
}) {
    return (
        <Link to={'/events/'+ event.id} state={{ e: {event} }} className="eventCard">
            <div className="imgDiv" style={{ backgroundImage: `url("${image}")`  }}> </div>
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
