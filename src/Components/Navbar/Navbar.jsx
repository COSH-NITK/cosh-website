import './Navbar.scss'

import React, { useState, useEffect } from 'react'
import logo from '../../Assets/logo.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


function Navbar() { 

    // const [navbar, setNavbar] = useState(false);
    const [top, setTop] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const changeScroll = () => {
        // console.log(window.scrollY);
        if(window.scrollY===0) setTop(true);
        else setTop(false);
    }
    var darkTop = true;

    window.addEventListener('scroll', changeScroll);

    const location = useLocation();
    // console.log(location.pathname);
    // console.log(typeof location.pathname);
    if (location.pathname === '/domains') darkTop=false;

    function closeSidebarGoTop () {
        window.scrollTo(0, 0);
        setSidebarOpen(false);
    }

    useEffect(() => {
        sidebarOpen 
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'unset';
     }, [sidebarOpen ]);

    return (
        <div className={`navbarDiv ${top===true ? "top" : ""} ${darkTop===true && top===true ? "transparent" : ""}`}>
            <div to={"/home"} className="leftDiv">
                <GiHamburgerMenu className="hamburger" onClick={()=>setSidebarOpen(true)} />
                <Link to={"/home"} >
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
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
            <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
                <div className={`closeDiv ${top===true ? "top" : ""} `}>
                    <AiOutlineClose className="closeIcon" onClick={()=>setSidebarOpen(false)} />
                </div>
                <div className="itemsList">
                    <Link to="/home" onClick={closeSidebarGoTop}>Home</Link>
                    <Link to="/about" onClick={closeSidebarGoTop}>About</Link>
                    <Link to="/how-we-work" onClick={closeSidebarGoTop}>How we work</Link>
                    <Link to="/collaborate" onClick={closeSidebarGoTop}>Collaborate</Link>
                    <Link to="/domains" onClick={closeSidebarGoTop}>Domains</Link>
                    <Link to="/events" onClick={closeSidebarGoTop}>Events</Link>
                    <Link to="/blog" onClick={closeSidebarGoTop}>Blog</Link>
                    <Link to="/contact" onClick={closeSidebarGoTop}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
