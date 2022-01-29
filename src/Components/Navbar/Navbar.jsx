import './Navbar.scss'

import React, { useState, useEffect, useRef } from 'react'
import logo from '../../Assets/logo.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiArrowCircleUp } from 'react-icons/hi';
import { FaLongArrowAltUp } from 'react-icons/fa';


function Navbar() { 

    // const [navbar, setNavbar] = useState(false);
    const [top, setTop] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const pages = ['Home', 'About', 'How we work', 'Collaborate', 'Domains', 'Events', 'Blog', 'Contact'];
    const pagePaths = ['home', 'about', 'how-we-work', 'collaborate', 'domains', 'events', 'blog', 'contact'];

    var active = 1;
    const location = useLocation();
    for(var i=0; i<pagePaths.length; i++) if (location.pathname === '/'+pagePaths[i]) active = i+1;

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (sidebarOpen && ref.current && !ref.current.contains(e.target)) {
            setSidebarOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [sidebarOpen])

    const changeScroll = () => {
        // console.log(window.scrollY);
        if(window.scrollY===0) setTop(true);
        else setTop(false);
    }
    var darkTop = true;

    window.addEventListener('scroll', changeScroll);

    // const location = useLocation();
    // console.log(location.pathname);
    // console.log(typeof location.pathname);
    if (location.pathname === '/domains') darkTop=false;
    const validBlogPage = new RegExp(
        '\/blog\/[^]+'
     );
    const validProjectPage = new RegExp(
        '\/project\/[^]+'
     );
    const validEventPage = new RegExp(
        '\/events\/[^]+'
     );
    if (validBlogPage.test(location.pathname)) darkTop=false;
    if (validProjectPage.test(location.pathname)) darkTop=false;
    if (validEventPage.test(location.pathname)) darkTop=false;

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
    <>
        <div className={`navbarDiv ${top===true ? "top" : ""} ${darkTop===true && top===true ? "transparent" : ""}`}>
            <div to={"/home"} className="leftDiv">
                <GiHamburgerMenu className="hamburger" onClick={()=>setSidebarOpen(true)} />
                <Link to={"/home"} >
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
            <div className="rightDiv">
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/how-we-work" >How we work</Link>
                <Link to="/collaborate" onClick={()=>window.scrollTo(0, 0)}>Collaborate</Link>
                {/* <Link to="/domains">Domains</Link> */}
                <div className="dropdown">
                    <Link className="dropbtn" to="/domains">Domains
                    <i className="fa fa-caret-down"></i>
                    </Link>
                    <div className="dropdown-content">
                        <Link to="/domains" state={{ goto: 1 }}>Artificial Intelligence</Link>
                        <Link to="/domains" state={{ goto: 2 }}>Blockchain</Link>
                        <Link to="/domains" state={{ goto: 3 }}>Development</Link>
                        <Link to="/domains" state={{ goto: 4 }}>Electric Vehicles</Link>
                        <Link to="/domains" state={{ goto: 5 }}>Game Development</Link>
                        <Link to="/domains" state={{ goto: 6 }}>Networking</Link>
                        <Link to="/domains" state={{ goto: 7 }}>Robotics</Link>
                        <Link to="/domains" state={{ goto: 8 }}>Security</Link>
                        <Link to="/domains" state={{ goto: 9 }}>Systems</Link>
                        </div>
                </div>
                <Link to="/events" >Events</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/contact" >Contact</Link>
            </div>
            <div className={`sidebar ${sidebarOpen ? "open" : "close"}`} ref={ref}>
                <div className={`closeDiv ${top===true ? "top" : ""} `}>
                    <AiOutlineClose className="closeIcon" onClick={()=>setSidebarOpen(false)} />
                </div>
                <div className="itemsList">
                    { pages.map(
                        (d, i)=> <Link to={'/'+pagePaths[i]} className={`${active===i+1 ? "active" : ""}`} key={i} onClick={closeSidebarGoTop}>{d}</Link>
                    ) }

                    {/* <Link to="/home" onClick={closeSidebarGoTop}>Home</Link>
                    <Link to="/about" onClick={closeSidebarGoTop}>About</Link>
                    <Link to="/how-we-work" onClick={closeSidebarGoTop}>How we work</Link>
                    <Link to="/collaborate" onClick={closeSidebarGoTop}>Collaborate</Link>
                    <Link to="/domains" onClick={closeSidebarGoTop}>Domains</Link>
                    <Link to="/events" onClick={closeSidebarGoTop}>Events</Link>
                    <Link to="/blog" onClick={closeSidebarGoTop}>Blog</Link>
                    <Link to="/contact" onClick={closeSidebarGoTop}>Contact</Link> */}
                </div>
            </div>
        </div>
        {/* <HiArrowCircleUp className={`toTopIcon ${top===false ? 'show' : ''}`} onClick={()=> window.scrollTo(0,0)} size={70} /> */}
        <div className={`toTopDiv ${top===false ? 'show' : ''}`} onClick={()=> window.scrollTo(0,0)} >
            <FaLongArrowAltUp />
            <p>To top</p>
        </div>
        </>
    )
}

export default Navbar
