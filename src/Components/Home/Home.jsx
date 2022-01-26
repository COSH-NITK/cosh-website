import React, { useState, useEffect } from 'react';
import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';
import Moment from 'moment';
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
import DomainCards from './DomainCards';

import { AnimatePresence, motion } from 'framer-motion';



function Home({domainList}) {


    const [open, setOpen] = useState(1);
    const [tweetData, setTweetData] = useState({});

    const getTweets=()=>{
        fetch('tweets.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setTweetData(myJson);
            return myJson;
          });
      }

    const domains = ['Artificial Intelligence', 'Blockchain', 'Development', 'Electric Vehicles', 'Game Development', 'Networking', 'Robotics', 'Security', 'Systems' ];

    const domainIllustrations = [il_d1, il_d5, il_d4, il_d7, il_d8, il_d3, il_d6, il_d9, il_d2];

    useEffect(() => {
        window.scrollTo(0, 0);
        getTweets();
    }, []);

    // useEffect(() => {console.log(tweetData.data);}, [tweetData]);

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
                                        <p dangerouslySetInnerHTML={{ __html: tweet.referenced_tweets[0].data.text.replaceAll(regex, (match)=> '<p class= "link">'+match+'</p>') }}></p>
                                    </div>
                                }

                                <div className="twitterIcons">
                                    <img src={commentIcon} className="icon" alt="icon" />
                                    <img src={retweetIcon} className="icon" alt="icon" />
                                    <img src={likeIcon} className="icon" alt="icon" />
                                </div>
                            </a>
                        })
                    }

                    {/* <div className="tweetDiv">
                        <div className="handleRow">
                            <div className="handle">
                                <img src="https://pbs.twimg.com/profile_images/1445714710003740679/nwBtRb5B_400x400.jpg" className="handleIcon"></img>
                                <h4>COSH NITK</h4>  
                            </div>
                            <p>DEC 20</p>
                        </div>
                        <p>Google Summer of Code 2022 Program Announced (with a cool new website)!</p>
                        <p>https://summerofcode.withgoggle.com</p>
                        <p>Registration opens in February 2022 for Organizations and in April 2022 for Contributors.</p>
                        <p>#GSoC</p>

                        <div className="twitterIcons">
                            <img src={commentIcon} className="icon" alt="icon" />
                            <img src={retweetIcon} className="icon" alt="icon" />
                            <img src={likeIcon} className="icon" alt="icon" />
                        </div>
                    </div>
                    <div className="tweetDiv">
                        <div className="handleRow">
                            <div className="handle">
                                <img src="https://pbs.twimg.com/profile_images/1445714710003740679/nwBtRb5B_400x400.jpg" className="handleIcon"></img>
                                <h4>COSH NITK</h4>  
                            </div>
                            <p>DEC 20</p>
                        </div>
                        <p>Season of Docs ends for 2021!</p>

                        <div className="linkedTweetDiv">
                            <div className="handleRow">
                                <div className="handle">
                                    <img src="https://pbs.twimg.com/profile_images/1445714710003740679/nwBtRb5B_400x400.jpg" className="handleIcon"></img>
                                    <h4>Google Open Source</h4>  
                                </div>
                                <p>DEC 20</p>
                            </div>
                            <p>Raising hands Season of Docs has announced the 2021 program results for all projects! </p>
                            <p>Sparkles Learn about the 2021 program</p>
                            <p>Left-pointing magnifying glass View a list of completed projects along with their case studies</p>
                            <p>Electric light bulb Find out how your  #OpenSource organization can participate in 2022!</p>
                        </div>

                        <div className="twitterIcons">
                            <img src={commentIcon} className="icon" alt="icon" />
                            <img src={retweetIcon} className="icon" alt="icon" />
                            <img src={likeIcon} className="icon" alt="icon" />
                        </div>
                    </div>
                    <div className="tweetDiv">
                        <div className="retweetRow">
                            <img src={retweetIcon} className="icon" alt="icon" />
                            <lable>COSH NITK Retweeted</lable>
                        </div>
                        <div className="handleRow">
                            <div className="handle">
                                <img src="https://pbs.twimg.com/profile_images/1322201332934156288/9CjMTKbb_400x400.jpg" className="handleIcon"></img>
                                <h4>Command Line Magic</h4>  
                            </div>
                            <p>DEC 20</p>
                        </div>
                        <p>Running out of space on that 1TB drive? On Linux, the ext[234] filesystems reserve 5% of the space by default to only used by the root user, that's 50GB! You can reduce it to 2% with the following command (Replace sda1 with whatever):</p>
                        <p>sudo tune2fs -m2 /dev/sda1</p>

                        <div className="twitterIcons">
                            <img src={commentIcon} className="icon" alt="icon" />
                            <img src={retweetIcon} className="icon" alt="icon" />
                            <img src={likeIcon} className="icon" alt="icon" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="homeSection4">
                <h1 className="sectionHeader light">
                    Domains
                </h1>
                <DomainCards/>
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
                                    <ProjectCards projects={domainList[i] ? domainList[i].projects : []} ongoing={true} domainId={domainList.length>0 && domainList[i] ? domainList[i].id : null} />
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
