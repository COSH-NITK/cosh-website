import Home from './Components/Home/Home'
import Collaborate from './Components/Collaborate/Collaborate'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

import { BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/collaborate' element={<Collaborate/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route exact path="/" element={<Navigate replace to="/home" />}>
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
