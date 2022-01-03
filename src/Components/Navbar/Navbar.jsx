import './Navbar.scss'

import React, { useState } from 'react'
import logo from '../../Assets/logo.svg';

import { Link } from 'react-router-dom';


function Navbar() { 

    // const [navbar, setNavbar] = useState(false);
    const [top, setTop] = useState(true);

    const changeScroll = () => {
        // console.log(window.scrollY);
        if(window.scrollY===0) setTop(true);
        else setTop(false);
    }

    window.addEventListener('scroll', changeScroll);

    return (
        <div className={`navbarDiv ${top===true ? "top" : ""}`}>
            <Link to={"/home"} className="leftDiv">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <div className="rightDiv">
                <Link to="/home" onClick={()=>window.scrollTo(0, 0)}>Home</Link>
                <Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About</Link>
                <Link to="/how-we-work" onClick={()=>window.scrollTo(0, 0)}>How we work</Link>
                <Link to="/collaborate" onClick={()=>window.scrollTo(0, 0)}>Collaborate</Link>
                {/* <Link to="/domains">Domains</Link> */}
                <div className="dropdown">
                    <Link className="dropbtn" to="/domains">Domains
                    <i className="fa fa-caret-down"></i>
                    </Link>
                    <div className="dropdown-content">
                        <Link to="/domains">Artificial Intelligence</Link>
                        <Link to="/domains">Systems</Link>
                        <Link to="/domains">Networking</Link>
                        <Link to="/domains">Development</Link>
                        <Link to="/domains">Blockchain</Link>
                        <Link to="/domains">Robotics</Link>
                        <Link to="/domains">Electric Vehicles</Link>
                        <Link to="/domains">Game Development</Link>
                        <Link to="/domains">Security</Link>
                        </div>
                </div>
                <Link to="/events" onClick={()=>window.scrollTo(0, 0)}>Events</Link>
                <Link to="/blog" onClick={()=>window.scrollTo(0, 0)}>Blog</Link>
                <Link to="/contact" onClick={()=>window.scrollTo(0, 0)}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
