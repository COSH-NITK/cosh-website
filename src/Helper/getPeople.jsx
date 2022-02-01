import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

async function getPeople() {
    const peopleCol = collection(db, 'team');
    const peopleSnapshot = await getDocs(peopleCol);
    var peopleList = peopleSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    // console.log('people', peopleList);
    return peopleList;
  }

export default getPeople;