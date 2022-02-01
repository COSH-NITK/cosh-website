import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

async function getDomainList() {
    const domainsCol = collection(db, 'domains');
    const domainSnapshot = await getDocs(domainsCol);
    var domainList = await domainSnapshot.docs.map(async doc => {
        return {...doc.data(), id: doc.id, projects: await getProjects(db, doc.id)}
    });

    return {domainList};
  }

  async function getProjects(db, id) {
    const projectsCol = collection(db, 'domains/' + id + '/projects');
    const projectSnapshot = await getDocs(projectsCol);
    var domainProjectList = projectSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    return domainProjectList;
  }

export default getDomainList;