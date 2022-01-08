import React, { useState, useEffect } from 'react';
import './Home.scss'

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



function Home() {


    const [open, setOpen] = useState(1);

    useEffect(() => {window.scrollTo(0, 0);})


    return (
        <div className="homeDiv">
            <div className="homeSection1">
                <h1>Center for <nobr>Open-Source</nobr> Software and Hardware NITK</h1>
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
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d1} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Artificial Intelligence</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d2} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Systems</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d3} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Networking</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d4} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Development</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d5} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Blockchain</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d6} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Robotics</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d7} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Electric Vehicles</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d8} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Game Development</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/domains">
                        <div className="domainCard">
                            <div className="domainImg">
                                <img src={il_d9} className="il_d" alt="Illustration" />
                            </div>
                            <div className="domainTitleDiv">
                                <h3>Security</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="homeSection5">
                <div className="projectsListDiv">
                    <h1 className="sectionHeader">
                        Projects
                    </h1>
                    <div className="domainBar" onClick={()=>open === 1 ? setOpen(0) : setOpen(1)}>
                        <button>Artificial Intelligence</button>
                        <img src={open===1 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===1 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 2 ? setOpen(0) : setOpen(2)}>
                        <button >Systems</button>
                        <img src={open===2 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===2 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 3 ? setOpen(0) : setOpen(3)}>
                        <button >Networking</button>
                        <img src={open===3 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===3 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 4 ? setOpen(0) : setOpen(4)}>
                        <button >Development</button>
                        <img src={open===4 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===4 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 5 ? setOpen(0) : setOpen(5)}>
                        <button >Blockchain</button>
                        <img src={open===5 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===5 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 6 ? setOpen(0) : setOpen(6)}>
                        <button >Robotics</button>
                        <img src={open===6 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===6 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 7 ? setOpen(0) : setOpen(7)}>
                        <button >Electric Vehicles</button>
                        <img src={open===7 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===7 ? "show" : "hide"}`}>
                        <ProjectCards />  
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 8 ? setOpen(0) : setOpen(8)}>
                        <button >Game Development</button>
                        <img src={open===8 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===8 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 9 ? setOpen(0) : setOpen(9)}>
                        <button >Security</button>
                        <img src={open===9 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===9 ? "show" : "hide"}`}>
                        <ProjectCards />
                    </div>
                    <hr />
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
