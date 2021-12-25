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
                <Link to="/collaborate">Collaborate</Link>
                <Link to="/domains">Domains</Link>
                <Link to="/events">Events</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
