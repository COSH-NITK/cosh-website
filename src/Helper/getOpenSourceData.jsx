import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

async function getOpenSourceData() {
    const orgsCol = collection(db, 'gsoc_archive');
    const orgsSnapshot = await getDocs(orgsCol);
    var orgsList = orgsSnapshot.docs.map(doc => {
        return {...doc.data()}
    });
    // console.log('orgs', orgsList[0]);
    return orgsList;
  }

export default getOpenSourceData;