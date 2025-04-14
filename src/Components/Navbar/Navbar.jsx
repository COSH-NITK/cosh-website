import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { motion, AnimatePresence } from "framer-motion";
import { GoTriangleDown } from "react-icons/go";

import './Navbar.scss'
import logo from '../../Assets/logo.svg';

function Navbar({setSearchOpen}) { 

    // const [navbar, setNavbar] = useState(false);

    const [active, setActive] = useState(1);
    const [top, setTop] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMouse, toggleMouse] = React.useState(false);
    const [isMouseTwo, toggleMouseTwo] = React.useState(false);
    
    const toggleMouseMenu = () => {
        toggleMouse(!isMouse);
    };
    const toggleMouseMenuTwo = () => {
        toggleMouseTwo(!isMouseTwo);
    };
    const subMenuAnimate = {
        enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.3
        },
        display: "block"
        },
        exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
            duration: 0.3,
            delay: 0.3
        },
        transitionEnd: {
            display: "none"
        }
        }
    };

    // const pages = ['Home', 'About', 'How we work', 'Collaborate', 'Domains', 'Events', 'Blog', 'Contact'];
    // const pagePaths = ['home', 'about', 'how-we-work', 'collaborate', 'domains', 'events', 'blog', 'contact'];
    const pages = ['Home', 'About', 'Collaborate', 'API Day', 'Postman Classroom Program', 'Domains', 'Events', 'Blog','People', 'Organisations', 'Contact'];
    const pagePaths = ['home', 'about', 'collaborate', 'api-day', 'postman-classroom-program', 'domains', 'events', 'blog','people','organisations', 'contact'];

    

    const ref = useRef()
    const location = useLocation();

    useEffect(() => {
        for(var i=0; i<pagePaths.length; i++) if (location.pathname === '/'+pagePaths[i]) setActive(i+1);
    }, [location.pathname])
    // useEffect(() => {
    //     console.log('active: ', active);
    // }, [active])

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
    if (location.pathname === '/login') darkTop=false;
    if (location.pathname === '/dashboard') darkTop=false;
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
        <div className={`navbarDivContainer ${top===true ? "top" : ""} ${darkTop===true && top===true ? "transparent" : ""}`}>
            <div className="navbarDiv">
                <div to={"/home"} className="leftDiv">
                    <GiHamburgerMenu className="hamburger" onClick={()=>setSidebarOpen(true)} />
                    <Link to={"/home"} >
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <div className="rightDiv">
                    <Link to="/home" >Home
                        {
                            active !== 1 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    <Link to="/about" >About
                        {
                            active !== 2 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    {/* <Link to="/how-we-work" >How we work
                        {
                            active !== 3 ? null :
                            <motion.div className={`underline ${top == true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link> */}
                    <Link to="/collaborate" onClick={()=>window.scrollTo(0, 0)}>Collaborate
                        {
                            active !== 3 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    <Link to="/api-day" >API Day
                        {
                            active !== 4 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    <Link to="/postman-classroom-program" >Postman Classroom Program
                        {
                            active !== 5 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    {/* <Link to="/domains">Domains</Link> */}
                    <div className="dropdown">
                        <motion.div
                            className="menu-item"
                            onMouseEnter={toggleMouseMenu}
                            onMouseLeave={toggleMouseMenu}
                        >
                            <p className="dropbtn">Domains
                            {
                                active !== 6 ? null :
                                <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                            }
                            </p>
                            <motion.div
                            className="sub-menu"
                            initial="exit"
                            animate={isMouse ? "enter" : "exit"}
                            variants={subMenuAnimate}
                            >
                            {/* <div className="sub-menu-background" /> */}
                            <div className="sub-menu-container">
                                {/* <Link to="/domains" state={{ goto: 1 }}>Artificial Intelligence</Link> */}
                                {/* <Link to="/domains" state={{ goto: 2 }}>Blockchain</Link> */}
                                <Link to="/domains" state={{ goto: 1 }}>Development</Link>
                                {/* <Link to="/domains" state={{ goto: 4 }}>Electric Vehicles</Link> */}
                                {/* <Link to="/domains" state={{ goto: 5 }}>Game Development</Link> */}
                                <Link to="/domains" state={{ goto: 2 }}>Networking</Link>
                                {/* <Link to="/domains" state={{ goto: 7 }}>Robotics</Link> */}
                                {/* <Link to="/domains" state={{ goto: 8 }}>Security</Link> */}
                                {/* <Link to="/domains" state={{ goto: 9 }}>Systems</Link> */}
                            </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <Link to="/events" >Events
                        {
                            active !== 7 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    <Link to="/blog" >Blog
                        {
                            active !== 8 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    {/* <Link to="/people" >
                        
                    </Link> */}
                    <div className="dropdown">
                        <motion.div
                            className="menu-item"
                            onMouseEnter={toggleMouseMenuTwo}
                            onMouseLeave={toggleMouseMenuTwo}
                        >
                            <div className='openSourceArchive'>
                                <GoTriangleDown className='triangle'/>
                                <p className='dropbtn'>
                                NITK Open Source Archive
                                {
                                active !== 9 ? null :
                                <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                                }
                                {
                                active !== 10 ? null :
                                <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                                }
                                </p>
                                
                            </div>
                                <motion.div
                                className="sub-menu"
                                initial="exit"
                                animate={isMouseTwo ? "enter" : "exit"}
                                variants={subMenuAnimate}
                                >
                                <div className="sub-menu-container">
                                
                                    <Link to="/people" state={{ goto: 1 }}>People</Link>
                                    
                                    <Link to="/organisations" state={{ goto: 2 }}>Organisations</Link>
                                
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <Link to="/contact" >Contact
                        {
                            active !== 11 ? null :
                            <motion.div className={`underline ${top === true ? '' : 'hide'} `} layoutId="underline" />
                        }
                    </Link>
                    <span className="searchIcon" onClick={()=> setSearchOpen(true)} >
                        <HiOutlineSearchCircle size='30' />
                    </span>
                </div>
                <div className={`sidebar ${sidebarOpen ? "open" : "close"}`} ref={ref}>
                    <div className={`closeDiv ${top===true ? "top" : ""} `}>
                        <AiOutlineClose className="closeIcon" onClick={()=>setSidebarOpen(false)} />
                    </div>
                    <div className="itemsList">
                        { pages.map(
                            (d, i)=> <Link to={'/'+pagePaths[i]} className={`${active===i+1 ? "active" : ""}`} key={i} onClick={closeSidebarGoTop}>{d}</Link>
                        ) }
                    </div>
                </div>
            </div>
            <div className={`toTopDiv ${top===false ? 'show' : ''}`} onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} >
                <FaLongArrowAltUp />
                <p>To top</p>
            </div>
        </div>
        </>
    )
}

export default Navbar
