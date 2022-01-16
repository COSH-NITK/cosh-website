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

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/collaborate' element={<Collaborate/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/blog/:slug' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/how-we-work' element={<HowWeWork/>} />
        <Route path='/domains' element={<Domains/>} />
        <Route path='/project/:id' element={<Project/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/:id' element={<Event/>} />
        <Route exact path="/" element={<Navigate replace to="/home" />}>
        </Route>
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
