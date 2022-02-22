import React, {useState, useEffect, useRef} from 'react'

import { useLocation } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri';
import {Helmet} from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

import './Domains.scss'
import il_plus from '../../Assets/il_plus.svg';
import il_minus from '../../Assets/il_minus.svg';
import ProjectCards from '../../Components/ProjectCards/ProjectCards';
import FacultyCards from '../../Components/FacultyCards/FacultyCards'

function Domains({domainList}) {

    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(1);
    // console.log('running');
    const [topBarOpen, setTopBarOpen] = useState(false);

    // useEffect(() => {
    //     console.log(domainList);
    // }, [domainList]);

    useEffect(() => {
        if(window.innerWidth <= 1200) setTopBarOpen(true);
        const saved = localStorage.getItem("active");
        const initialValue = parseInt(saved);
        if(initialValue) setActive(initialValue);
    }, [])

    const ref = useRef()

    const location = useLocation()
    // console.log(location);

    useEffect(() => {
        if(location.state!=null){
            const { goto } = location.state
            // console.log("goto: "+goto);
            setActive(goto);
        }
      }, [location.state]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (topBarOpen && ref.current && !ref.current.contains(e.target)) {
            setTopBarOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [topBarOpen])

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("active", active.toString());
    }, [active]);

    useEffect(() => {
        topBarOpen 
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'unset';
     }, [topBarOpen ]);

    // const domains = ['Artificial Intelligence', 'Blockchain', 'Development', 'Electric Vehicles', 'Game Development', 'Networking', 'Robotics', 'Security', 'Systems' ];

    function changeDomain(d) {
        setActive(d);
        setTopBarOpen(false);
    }

    return (
        !domainList ? null :
        <div className="domainsDivContainer">
            <div className="domainsDiv">
                <Helmet>
                    <title>COSH Domains</title>
                </Helmet>
                <div className={`topBar ${topBarOpen ? "open" : ""}`} ref={ref}>
                    <div className="topBarHeader">
                        <h3 onClick={() => setTopBarOpen(!topBarOpen)}>{domainList[active-1] ? domainList[active-1].name : ''}</h3>
                        <RiArrowDropDownLine className={`dropdownIcon ${topBarOpen ? "open" : ""}`} size={30} />
                    </div>
                    <div className={`topBarOptions ${topBarOpen ? "open" : ""}`}>
                        { domainList.map(
                            (d, i)=> <p className={`${active===i+1 ? "active" : ""}`} key={i} onClick={() => changeDomain(i+1)}>{d ? d.name : ''}</p>
                        ) }
                    </div>
                </div>
                <div className="left">
                    <h1>Domains</h1>
                    {/* <hr /> */}
                    { domainList.map(
                        (d, i)=> <div className="domainListRow" key={i}>
                            <div className="bullet">
                                <div className={`leftCircle ${active===i+1 ? "active" : ""}`}></div>
                                <div className={`centerBar ${active===i+1 ? "active" : ""}`}></div>
                                <div className={`rightCircle ${active===i+1 ? "active" : ""}`}></div>
                            </div>
                            <h3 className={`${active===i+1 ? "active" : ""}`} onClick={() => setActive(i+1)}>{d ? d.name : ''}</h3>
                        </div>
                    ) }
                </div>
                <div className="right">
                    <h1>{domainList.length > 0 ? domainList[active-1].name : ''}</h1>
                    <p>{domainList.length > 0 ? domainList[active-1].description : ''}</p>

                    <div className="projectsDiv">
                        <h2>Projects</h2>
                        
                        <div className="expandableBar" onClick={()=>open === 1 ? setOpen(0) : setOpen(1)}>
                            <button>Ongoing Projects</button>
                            <motion.img 
                                src={open===1 ? il_minus : il_plus} 
                                className="il_plus" 
                                alt="Illustration" 
                                initial={false}
                                animate={{ rotate: open===1 ? 0 : 180 }}
                            />
                        </div>  

                        <AnimatePresence initial={false}>
                            {open===1 && (
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                open: { opacity: 1, height: "auto", marginBottom: "30px" },
                                collapsed: { opacity: 0, height: 0 , marginBottom: 0}
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className={`content`}>
                                    <ProjectCards projects={domainList[active-1] ? domainList[active-1].projects : []} ongoing={true} domainId={domainList[active-1].id} />
                                </div>
                            </motion.section>
                            )}
                        </AnimatePresence>

                        <hr />

                        <div className="expandableBar" onClick={()=>open === 2 ? setOpen(0) : setOpen(2)}>
                            <button>Past Projects</button>
                            <motion.img 
                                src={open===2 ? il_minus : il_plus} 
                                className="il_plus" 
                                alt="Illustration" 
                                initial={false}
                                animate={{ rotate: open===2 ? 0 : 180 }}
                            />
                        </div>  

                        <AnimatePresence initial={false}>
                            {open===2 && (
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                open: { opacity: 1, height: "auto", marginBottom: "30px" },
                                collapsed: { opacity: 0, height: 0 , marginBottom: 0}
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className={`content ${open===2 ? "show" : "hide"}`}>
                                    <ProjectCards projects={domainList[active-1] ? domainList[active-1].projects : []} ongoing={false} domainId={domainList[active-1].id} />
                                </div>
                            </motion.section>
                            )}
                        </AnimatePresence>

                        <hr />
                    </div>
                    {
                        domainList[active-1].team ? 
                        <div className="teamDiv">
                            <h2>Team</h2>
                            <FacultyCards people={domainList[active-1].team} />
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Domains
