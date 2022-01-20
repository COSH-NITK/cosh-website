import './Event.scss';

import React, {useEffect, useState} from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Moment from 'moment';

import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom'
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

    // useEffect(() => { if(event) console.log(Moment(event['date'].toDate()).format('D MMM YYYY'))}, [event]); 
    // useEffect(() => { console.log('date: ', Date.parse(event.date.toString()))}, [event]);

    return (
        loading
        ? <Loading/>
        : <div className="eventDiv">
            <h1>{event['name']}</h1>
            <hr />
            <p className="desc">{event.description}</p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Date</h2>
            </div>
            <p>{event.date && event.date.seconds &&  Moment(event['date'].toDate()).format('D MMM YYYY')}</p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Location</h2>
            </div>
            <p>{event['location']}</p>
           
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
