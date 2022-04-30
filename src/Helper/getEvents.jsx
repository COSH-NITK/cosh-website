import { getFirestore, collection, getDocs, Timestamp, orderBy} from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';

import db from '../Firebase/Firebase';
import dateBefore from './dateBefore';

let memory = new Map();
async function getEvents() {

    if(memory.get('events')) return memory.get('events');

    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol, orderBy('date'));
    var eventList = eventSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    // eventSnapshot.docs.map(doc => console.log(doc.id));
    eventList.sort(
        (a, b) => dateBefore(a['date'].toDate(), b['date'].toDate()) ? 1 : -1
    )
    // console.log('events', eventList);
    memory.set('events', eventList);
    return eventList;
  }

  export default getEvents;