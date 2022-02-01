import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

async function getEvent(id) {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    const eventList = eventSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    var event = {};
    for (var i = 0; i < eventList.length; i++) if(eventList[i].id === id) event = eventList[i];
    return event;
  }

export default getEvent;