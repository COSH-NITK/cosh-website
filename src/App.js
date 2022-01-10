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

import { BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-TNDcXh1EYvpgBV_BaX3LiXXGmd7zvfg",
  authDomain: "cosh-website.firebaseapp.com",
  projectId: "cosh-website",
  storageBucket: "cosh-website.appspot.com",
  messagingSenderId: "105841487305",
  appId: "1:105841487305:web:ec924a1bb98a3647e28c18",
  measurementId: "G-W9XCCF49P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getData(db) {
  const data = collection(db, 'cities');
  console.log(db);
  console.log(data);
  return;
}

function App() {
  getData(db);
  return (
    <Router>
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
    </Router>
  );
}

export default App;
