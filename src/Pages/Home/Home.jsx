import React, { useState, useEffect } from 'react';

import Moment from 'moment';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

import './Home.scss';
import Illustration1 from '../../Assets/il1.svg';
import Illustration2 from '../../Assets/il2.svg';
import commentIcon from '../../Assets/comment_icon.svg';
import retweetIcon from '../../Assets/retweet_icon.svg';
import likeIcon from '../../Assets/like_icon.svg';
import il_plus from '../../Assets/il_plus.svg';
import il_minus from '../../Assets/il_minus.svg';
import ProjectCards from '../../Components/ProjectCards/ProjectCards';
import BlogsList from '../../Components/BlogsList/BlogsList';
import DomainCards from '../../Components/DomainCards/DomainCards';
import getTweets from '../../Helper/getTweets';

function Home({domainList}) {


    const [open, setOpen] = useState(1);
    const [tweetData, setTweetData] = useState({});

    const domains = ['Artificial Intelligence', 'Blockchain', 'Development', 'Electric Vehicles', 'Game Development', 'Networking', 'Robotics', 'Security', 'Systems' ];

    // const domainIllustrations = [il_d1, il_d5, il_d4, il_d7, il_d8, il_d3, il_d6, il_d9, il_d2];

    useEffect(async () => {
        window.scrollTo(0, 0);
        getTweets(setTweetData);
    }, []);

    function trimString(str, length) {
        if(str.length <= length) return str;    
        var trimmedString = str.substr(0, length);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+'...';
        return trimmedString;
    }

    // useEffect(() => {console.log(tweetData.data);}, [tweetData]);

    return (
        <div className="homeDiv">
            <Helmet>
                <title>COSH NITK</title>
            </Helmet>
            <div className="homeSection1Container">
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
                        <h1>Centre for <nobr>Open-source</nobr> Software and Hardware</h1>
                    {/* </motion.div> */}
                    <p>A centre dedicated to open-source software and hardware at the National Institute of Technology Karnataka, Surathkal, Mangalore, India.</p>
                    <h3>Collaborate with us:</h3>
                    <div className="collaborateRow">
                        <Link to="/collaborate" className="button-light" state={{ goto: 1 }}>Industry</Link>
                        <Link to="/collaborate" className="button-light" state={{ goto: 2 }}>Academia</Link>
                        <Link to="/collaborate" className="button-light" state={{ goto: 3 }}>Students</Link> 
                        <object type="image/svg+xml" data={Illustration1} className="il1" alt="Illustration 1" />
                    </div>
                </div>
            </div>
            <div className="homeSection2">
                <div>
                    <h1 className="sectionHeader">
                        About us
                    </h1>
                    <p className="justify">Formed in October 2021 by a team of enthusiastic faculty members, the Centre for Open-Source Software and Hardware (COSH) at NITK Surathkal has a broad multidisciplinary objective of serving society through research, education, and development of open-source technologies, and is the first of its kind in India.</p>
                    <Link to="/about" className="button-dark" onClick={()=>window.scrollTo(0, 0)}>More about us</Link>
                </div>
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
                
                    {/* <TwitterContainer /> */}

                    {
                        tweetData.data && tweetData.data.map((tweet, i)=>{

                            if(i>=3) return null;

                            var tweetText = tweet.text;
                            var expression = /\http[^\s\\]+/gi;
                            var regex = new RegExp(expression);
                            tweetText = tweetText.replaceAll(regex, (match)=> '<p class= "link">'+match+'</p>');

                            return <a className="tweetDiv" href={'https://twitter.com/cosh_nitk/status/'+tweet.id} target="_blank" key={i}>
                                <div className="handleRow">
                                    <div className="handle">
                                        <img src={tweetData.includes.users[0].profile_image_url} className="handleIcon"></img>
                                        <div className="handleColumn">
                                            <h4>{tweetData.includes.users[0].name}</h4>  
                                            <p>@{tweetData.includes.users[0].username}</p>  
                                        </div>
                                    </div>
                                    <p>{Moment(tweet.created_at).format('D MMM')}</p>
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: tweetText }}></p>
                                {
                                    !tweet.referenced_tweets ? null :
                                    <div className="linkedTweetDiv">
                                        <div className="handleRow">
                                            <div className="handle">
                                                <img src={tweet.referenced_tweets[0].user.profile_image_url} className="handleIcon"></img>
                                                <div>
                                                    <h4>{tweet.referenced_tweets[0].user.name}</h4> 
                                                    <p>@{tweet.referenced_tweets[0].user.username}</p>  
                                                </div>
                                            </div>
                                            <p>{Moment(tweet.referenced_tweets[0].data.created_at).format('D MMM')}</p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: trimString(tweet.referenced_tweets[0].data.text, 160).replaceAll(regex, (match)=> '<p class= "link">'+match+'</p>' )}}></p>
                                    </div>
                                }
                                <div className="emptySpace"></div>

                                <div className="twitterIcons">
                                    <img src={commentIcon} className="icon" alt="icon" />
                                    <img src={retweetIcon} className="icon" alt="icon" />
                                    <img src={likeIcon} className="icon" alt="icon" />
                                </div>
                            </a>
                        })
                    }
                </div>
            </div>
            <div className="homeSection4">
                <div className="homeSection4Container">
                    <h1 className="sectionHeader light">
                        Domains
                    </h1>
                    <DomainCards/>
                </div>
            </div>
            <div className="homeSection5">
                <div className="projectsListDiv">
                    <h1 className="sectionHeader">
                        Projects
                    </h1>
                    {
                        domainList.map((domain, i)=>{
                             return <div key={i} style={{width: '100%'}}>

                                <div className="domainBar" onClick={()=>open === i+1 ? setOpen(0) : setOpen(i+1)}>
                                    <button>{domain.name}</button>
                                    <motion.img 
                                        src={open===i+1 ? il_minus : il_plus} 
                                        className="il_plus" 
                                        alt="Illustration" 
                                        initial={false}
                                        animate={{ rotate: open===i+1 ? 0 : 180 }}
                                    />
                                </div>  
                                <AnimatePresence initial={false}>
                                    {open===i+1 && (
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
                                        <div className={`content `}>
                                            <ProjectCards projects={domain ? domain.projects : []} any={true} ongoing={true} domainId={domainList.length>0 && domain ? domain.id : null} />
                                        </div>
                                    </motion.section>
                                    )}
                                </AnimatePresence>
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
