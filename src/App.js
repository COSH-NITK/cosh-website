import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
import Postman from './Pages/Postman/Postman'
import NotFound from './Pages/NotFound/NotFound'
import Loading from './Components/Loading/Loading'
import getDomainList from './Helper/getDomainList';
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  const location = useLocation();

  const [domainList, setDomainList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    getDomainList(setDomainList, setLoading);

    document.addEventListener('keydown',keydownHandler);
    return () => {
      document.removeEventListener('keydown',keydownHandler);
    };
  }, []); 

  function keydownHandler(e){
    // console.log(e.keyCode);
    if(e.keyCode===32 && e.ctrlKey) {
      setSearchOpen(state => !state);
    }
    if(e.keyCode===27) {
      setSearchOpen(false);
    }
  }
  

  useEffect(() => {
    if(searchOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
 }, [searchOpen]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className="App">
        {
          searchOpen ? <SearchBox setSearchOpen={setSearchOpen}/> : null
        }
        <Navbar setSearchOpen={setSearchOpen} />
        {
          loading
          ? <Loading/>
          : <Routes>
          <Route path='/home' element={<Home domainList={domainList} />} />
          <Route path='/collaborate' element={<Collaborate/>} />
          <Route path='/blog' element={<Blogs/>} />
          <Route path='/blog/:slug' element={<Blog/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact domainList={domainList} />} />
          <Route path='/how-we-work' element={<HowWeWork/>} />
          <Route path='/domains' element={<Domains domainList={domainList} />} />
          <Route path='/project/:id' element={<Project/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/:id' element={<Event/>} />
          <Route path='/postman-classroom-program' element={<Postman/>} />
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        }
        <Footer />
        <Toaster
        position="bottom-center" 
        />
      </div>
    </AnimatePresence>
  );
}

export default App;
