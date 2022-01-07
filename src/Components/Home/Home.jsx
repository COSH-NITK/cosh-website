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
import il_arrow from '../../Assets/il_arrow.svg';
import icon_article from '../../Assets/icon_article.svg';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import ProjectCards from '../ProjectCards/ProjectCards';
import TwitterContainer from './TwitterContainer';

import Moment from 'moment';


function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    
          fetch("http://localhost:2368/ghost/api/v4/content/posts/?key=e79efa054f96a9a3472ae7cb46", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result['posts']);
                setPosts(result['posts']);
                // res = result['posts'];
            })
            .catch(error => {
                console.log('error', error);
            });
        // console.log("posts", posts);
    }, [])
    // var posts = [];
    useEffect(() => {
        console.log("posts2", posts);
    }, [posts]);

    const [open, setOpen] = useState(1);


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
                <div className="blogCardsDiv">
                    {
                        posts.map((post, i)=>
                            post.featured ?
                            <BlogCard 
                                title={post.title} 
                                image={post.feature_image} 
                                desc={post.excerpt} 
                                time={post.reading_time}
                                published_at={post.published_at}
                            />
                            : null
                        )
                    }
                </div>
                <Link to={"/blog"} className="button-dark">View all blogs</Link>
            </div>
        </div>
    )
}

function BlogCard({
    title="default title", 
    desc="", 
    time="99", 
    published_at='2022-01-08T15:15:31.000+00:00',
    image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    }) {
    if(desc.length>150){
        desc=desc.slice(0,150) + "...";
    }
    return (
        <Link to="/blog">
            <div className="blogCardDiv">
            <div className="imgDiv" style={{ backgroundImage: `url("${image}")`  }}>
                    
                </div>
                <div className="contentDiv">
                    <div className="detailsDiv">
                        <p className="lable">{time} min read</p>
                        <p className="lable">{Moment(published_at).format('D MMM YYYY')}</p>
                    </div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="blogCardFooterDiv">
                        <div className="left">
                            <img src={icon_article} className="il_arrow" alt="arrow" />
                            <p>Article</p>
                        </div>
                        <div className="right" id="rightHover">
                            <img src={il_arrow} className="il_arrow" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default Home
