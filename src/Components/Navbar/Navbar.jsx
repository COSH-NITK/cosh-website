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
            <div className="leftDiv">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="rightDiv">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/how-we-work">How we work</Link>
                <Link to="/collaborate">Collaborate</Link>
                {/* <Link to="/domains">Domains</Link> */}
                <div class="dropdown">
                    <Link class="dropbtn" to="/domains">Domains
                    <i class="fa fa-caret-down"></i>
                    </Link>
                    <div class="dropdown-content">
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
                <Link to="/events">Events</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
