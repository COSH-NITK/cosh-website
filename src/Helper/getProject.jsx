import { getFirestore, collectionGroup, getDocs } from 'firebase/firestore/lite';

import db from '../Firebase/Firebase';

async function getProject(id) {
    const projectsCol = collectionGroup(db, 'projects');
    const projectSnapshot = await getDocs(projectsCol);
    const projectList = projectSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    var project = {};
    for (var i = 0; i < projectList.length; i++) if(projectList[i].id === id) project = projectList[i];
    console.log(project);
    return project;
  }

  export default getProject;