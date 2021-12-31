import React, { useState } from 'react';
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

// function getTweets() {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAALrHXQEAAAAAy4et9HV5kuUlO7ZtS0tTJRKP5lU%3DQUwo4EE9Kzi0gaxMWvSWuacIO2A02EGWXQExfQX8j7eAfK8zWn");
//     myHeaders.append("Cookie", "guest_id=v1%3A164053606425563203; guest_id_ads=v1%3A164053606425563203; guest_id_marketing=v1%3A164053606425563203; personalization_id=\"v1_NDaLWU36iRhVHLJ/yH/A1g==\"");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     fetch("https://api.twitter.com/2/users/1445712731282104335/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

function Home() {
    // getTweets();

    const [open, setOpen] = useState(1);


    return (
        <div className="homeDiv">
            <div className="homeSection1">
                <h1>Center for <br />Open-Source Software and Hardware NITK</h1>
                <p>A center dedicated to open-source software and hardware at the National Insitiute of Technology Karnataka Surathkal</p>
                <h3>Collaborate with us:</h3>
                <div className="row">
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
                <div className="button-dark">More about us</div>
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
                    
                    <div className="tweetDiv">
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
                    </div>
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
                                <h3>Game Development</h3>
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
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 2 ? setOpen(0) : setOpen(2)}>
                        <button >Systems</button>
                        <img src={open===2 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===2 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 3 ? setOpen(0) : setOpen(3)}>
                        <button >Networking</button>
                        <img src={open===3 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===3 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 4 ? setOpen(0) : setOpen(4)}>
                        <button >Development</button>
                        <img src={open===4 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===4 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 5 ? setOpen(0) : setOpen(5)}>
                        <button >Blockchain</button>
                        <img src={open===5 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===5 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 6 ? setOpen(0) : setOpen(6)}>
                        <button >Robotics</button>
                        <img src={open===6 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===6 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 7 ? setOpen(0) : setOpen(7)}>
                        <button >Electric Vehicles</button>
                        <img src={open===7 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===7 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 8 ? setOpen(0) : setOpen(8)}>
                        <button >Game Development</button>
                        <img src={open===8 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===8 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <hr />
                    <div className="domainBar" onClick={()=>open === 9 ? setOpen(0) : setOpen(9)}>
                        <button >Security</button>
                        <img src={open===9 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===9 ? "show" : "hide"}`}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
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
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <Link to={"/blog"} className="button-dark">View all blogs</Link>
            </div>
        </div>
    )
}

function ProjectCard() {
    return (
        <div className="projectCardDiv">
            <h3>This is the title of the project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis tellus egestas facilisis scelerisque.</p>
            <p className="readMore">Read more</p>
        </div>
    )
}
function BlogCard() {
    return (
        <Link to="/blog">
            <div className="blogCardDiv">
                <div className="imgDiv" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`  }}>
                    
                </div>
                <div className="contentDiv">
                    <div className="detailsDiv">
                        <p className="lable">2 min read</p>
                        <p className="lable">20 Oct 2021</p>
                    </div>
                    <h3>This is supposed to be the blog title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis tellus egestas facilisis scelerisque</p>
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
