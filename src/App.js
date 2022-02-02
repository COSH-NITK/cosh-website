import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Collaborate from './Pages/Collaborate/Collaborate'
import Blogs from './Pages/Blogs/Blogs'
import Blog from './Pages/Blogs/Blog'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import HowWeWork from './Pages/HowWeWork/HowWeWork'
import Domains from './Pages/Domains/Domains'
import Project from './Pages/Project/Project'
import Events from './Pages/Events/Events'
import Event from './Pages/Events/Event'
import Loading from './Components/Loading/Loading'
import getDomainList from './Helper/getDomainList';
import db from './Firebase/Firebase'

function App() {
  const location = useLocation();

  const [domainList, setDomainList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getDomainList(setDomainList, setLoading);
  }, []); 
  useEffect(() => {

    console.log('set Loading to: ', loading);
  }, [loading]); 

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
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/FLxda4batzZ4e39ESKcNKV6Y" element={<Navigate replace to="/home" />} />
        </Routes>
        }
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
