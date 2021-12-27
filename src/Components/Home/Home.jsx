import React from 'react'
import './Home.scss'

import Illustration1 from '../../Assets/il1.svg';
import Illustration2 from '../../Assets/il2.svg';
import commentIcon from '../../Assets/comment_icon.svg';
import retweetIcon from '../../Assets/retweet_icon.svg';
import likeIcon from '../../Assets/like_icon.svg';
import { AiFillTwitterCircle } from 'react-icons/ai';

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
    return (
        <div className="homeDiv">
            <div className="homeSection1">
                <h1>Center for <br />Open-Source Software and Hardware NITK</h1>
                <p>A center dedicated to open-source software and hardware at the National Insitiute of Technology Karnataka Surathkal</p>
                <h3>Collaborate with us:</h3>
                <div className="row">
                    <div className="button-light">Industry</div>
                    <div className="button-light">Academia</div>
                    <div className="button-light">Students</div>
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
        </div>
    )
}

export default Home
