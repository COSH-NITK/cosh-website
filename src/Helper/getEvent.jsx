import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

let memory = new Map();
async function getEvent(id) {
    if(memory.get(id)) return memory.get(id);

    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    const eventList = eventSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    var event = {};
    for (var i = 0; i < eventList.length; i++) if(eventList[i].id === id) event = eventList[i];
    memory.set(id, event);
    return event;
  }

export default getEvent;