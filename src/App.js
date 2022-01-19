import Home from './Components/Home/Home'
import Collaborate from './Components/Collaborate/Collaborate'
import Blogs from './Components/Blogs/Blogs'
import Blog from './Components/Blogs/Blog'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import HowWeWork from './Components/HowWeWork/HowWeWork'
import Domains from './Components/Domains/Domains'
import Project from './Components/Project/Project'
import Events from './Components/Events/Events'
import Event from './Components/Events/Event'
import Loading from './Components/Loading/Loading'

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import db from './Components/Firebase'

function App() {
  const location = useLocation();

  const [domainList, setDomainList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProjects(db, id) {
    const projectsCol = collection(db, 'domains/' + id + '/projects');
    const projectSnapshot = await getDocs(projectsCol);
    var domainProjectList = projectSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    return domainProjectList;
  }

  async function getData(db) {
      const domainsCol = collection(db, 'domains');
      const domainSnapshot = await getDocs(domainsCol);
      var domainList = await domainSnapshot.docs.map(async doc => {
          return {...doc.data(), id: doc.id, projects: await getProjects(db, doc.id)}
      });

      return {domainList};
    }

  useEffect(() => {

  getData(db).then(
      ({domainList})=>{

          Promise.all(domainList).then(
              (d) => {
                  console.log('d ', d);
                  d = d.sort(
                      (a, b) => a['name'] > b['name'] ? 1 : -1
                  );
                  setDomainList(d);
                  setLoading(false);
              }
          )
      }
  )
  }, []); 

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className="App">
        <Navbar/>
        {
          loading
          ? <Loading/>
          : <Routes>
          <Route path='/home' element={<Home domainList={domainList} />} />
          <Route path='/collaborate' element={<Collaborate/>} />
          <Route path='/blog' element={<Blogs/>} />
          <Route path='/blog/:slug' element={<Blog/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/how-we-work' element={<HowWeWork/>} />
          <Route path='/domains' element={<Domains domainList={domainList} />} />
          <Route path='/project/:id' element={<Project/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/:id' element={<Event/>} />
          <Route exact path="/" element={<Navigate replace to="/home" />}>
          </Route>
        </Routes>
        }
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
