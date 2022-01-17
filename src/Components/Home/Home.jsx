import React, { useState, useEffect } from 'react';
import './Home.scss';

import Illustration1 from '../../Assets/il1.svg';
import Illustration2 from '../../Assets/il2.svg';
import commentIcon from '../../Assets/comment_icon.svg';
import retweetIcon from '../../Assets/retweet_icon.svg';
import likeIcon from '../../Assets/like_icon.svg';
import il_d1 from '../../Assets/il_domain1.svg';
import il_d2 from '../../Assets/il_domain2.svg';
import il_d3 from '../../Assets/il_domain3.svg';
import il_d4 from '../../Assets/il_domain4.svg';
import il_d5 from '../../Assets/il_domain5.svg';
import il_d6 from '../../Assets/il_domain6.svg';
import il_d7 from '../../Assets/il_domain7.svg';
import il_d8 from '../../Assets/il_domain8.svg';
import il_d9 from '../../Assets/il_domain9.svg';
import il_plus from '../../Assets/il_plus.svg';
import il_minus from '../../Assets/il_minus.svg';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import ProjectCards from '../ProjectCards/ProjectCards';
import BlogsList from '../Blogs/BlogsList'
import TwitterContainer from './TwitterContainer';

import { AnimatePresence, motion } from 'framer-motion';


function Home() {


    const [open, setOpen] = useState(1);

    useEffect(() => {window.scrollTo(0, 0)}, []);

    const domains = ['Artificial Intelligence', 'Blockchain', 'Development', 'Electric Vehicles', 'Game Development', 'Networking', 'Robotics', 'Security', 'Systems' ];

    const domainIllustrations = [il_d1, il_d5, il_d4, il_d7, il_d8, il_d3, il_d6, il_d9, il_d2];


    return (
        <div className="homeDiv">
            <div className="homeSection1">
                {/* <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0,
                        x: { type: "spring", stiffness: 100},
                        default: { duration: 1 },
                      }}
                > */}
                    <h1>Center for <nobr>Open-Source</nobr> Software and Hardware NITK</h1>
                {/* </motion.div> */}
                <p>A center dedicated to open-source software and hardware at the National Insitiute of Technology Karnataka Surathkal</p>
                <h3>Collaborate with us:</h3>
                <div className="collaborateRow">
                    <Link to="/collaborate" className="button-light" state={{ goto: 1 }}>Industry</Link>
                    <Link to="/collaborate" className="button-light" state={{ goto: 2 }}>Academia</Link>
                    <Link to="/collaborate" className="button-light" state={{ goto: 3 }}>Students</Link> 
                    <img src={Illustration1} className="il1" alt="Illustration 1" />
                </div>
            </div>
            <div className="homeSection2">
                <h1 className="sectionHeader">
                    About us
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                <Link to="/about" className="button-dark" onClick={()=>window.scrollTo(0, 0)}>More about us</Link>
                <img src={Illustration2} className="il2" alt="Illustration 2" />
            </div>
            <div className="homeSection3">
                <div className="twitterHeaderDiv">
                    <h1 className="sectionHeader">
                        Latest Tweets
                    </h1>
                    <div>
                        <AiFillTwitterCircle className="icon" />
                        <a href="https://twitter.com/cosh_nitk" target="_blank">
                            @cosh_nitk
                        </a>
                    </div>
                </div>
                <div className="tweetsDiv">
                
                    <TwitterContainer />
                    
                </div>
            </div>
            <div className="homeSection4">
                <h1 className="sectionHeader light">
                    Domains
                </h1>
                <div className="domainsListDiv">
                    {
                        domains.map((domain, i)=>{
                            return <>
                                <Link to="/domains" state={{ goto: i+1 }} key={i}>
                                    <div className="domainCard">
                                        <div className="domainImg">
                                            <object type="image/svg+xml" data={domainIllustrations[i]}></object>
                                            {/* <img src={domainIllustrations[i]} className="il_d" alt="Illustration" /> */}
                                        </div>
                                        <div className="domainTitleDiv">
                                            <h3>{domain}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        })
                    }
                </div>
            </div>
            <div className="homeSection5">
                <div className="projectsListDiv">
                    <h1 className="sectionHeader">
                        Projects
                    </h1>
                    {
                        domains.map((domain, i)=>{
                             return <div key={i} style={{width: '100%'}}>
                                <div className="domainBar" onClick={()=>open === i+1 ? setOpen(0) : setOpen(i+1)}>
                                    <button>{domain}</button>
                                    <img src={open===i+1 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                                </div>  
                                <div className={`content ${open===i+1 ? "show" : "hide"}`}>
                                    <ProjectCards />
                                </div>
                                <hr />
                            </div>
                        })
                    }
                    <Link to={"/domains"} className="button-dark">View all projects</Link>
                </div>
            </div>
            <div className="homeSection6">
                <h1 className="sectionHeader">
                    Blog
                </h1>
                <BlogsList featured={true} />
                <Link to={"/blog"} className="button-dark">View all blogs</Link>
            </div>
        </div>
    )
}


export default Home
