// import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';

// import db from '../Firebase/Firebase';

async function getDomainList(setDomainList, setLoading) {

  // var url = 'https://cosh.nitk.ac.in/FLxda4batzZ4e39ESKcNKV6Y/domainList.json';
  var url = 'https://cosh.nitk.ac.in/domainList.json';
  if(window.location.hostname==="localhost") url = '/domainList.json';
  // console.log(url);
  fetch(url
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'mode': 'no-cors'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        var d = myJson.sort((a, b)=>a.name<b.name ? -1:1)
        // console.log(d);
        var d = d.filter(a => a.public)
        setDomainList(d);
        setLoading(false);
        return myJson;
      })
      .catch((err)=>console.log(err));

    // const domainsCol = collection(db, 'domains');
    // const domainSnapshot = await getDocs(domainsCol);
    // var domainList = await domainSnapshot.docs.map(async doc => {
    //     return {...doc.data(), id: doc.id, projects: await getProjects(db, doc.id)}
    // });

    // return {domainList};
  }

  // async function getProjects(db, id) {
  //   const projectsCol = collection(db, 'domains/' + id + '/projects');
  //   const projectSnapshot = await getDocs(projectsCol);
  //   var domainProjectList = projectSnapshot.docs.map(doc => {
  //       return {...doc.data(), id: doc.id}
  //   });
  //   return domainProjectList;
  // }

export default getDomainList;