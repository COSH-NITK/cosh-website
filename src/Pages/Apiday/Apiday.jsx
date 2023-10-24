import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

import './Apiday.scss';

function Apiday() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div className="postmanDiv">
        <Helmet>
            <title>API Day</title>
        </Helmet>
        <div className="postmanSection1Container">
            <div className="postmanSection1">
                <h1><span>API Day</span> Coastal Karnataka</h1>
                {/* <img src={il1} className="il1" alt="Illustration" /> */}
            </div>
        </div>
        <div className="postmanSection2">
            <div className="logoGrid">
                {/* <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FNITK-logo.png?alt=media&token=9a127e52-65ca-467b-b4ea-a80711247e78" alt="" srcset="" /> */}
                <img className='cosh' src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FCOSH-logo.png?alt=media&token=7cec2409-ffe1-4145-8148-22620e3d0512" alt="" srcset="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FPostman-logo-vertical-orange-2021.svg?alt=media&token=7faeeff1-313d-4cdb-a41e-fd142a7c0d4b" alt="" srcset="" />
            </div>
        </div>
        <div className="postmanSection3">

            {/* <h2>Details of the Certificate Course</h2> */}
            <h2><span> API Day Coastal Karnataka </span></h2>

            {/* <a href="https://bit.ly/cosh-api-day-reg" target="_blank" className="button-dark">Flyer</a> */}

            <h3 style={{marginTop: '50px'}}>Date and Time</h3>
            <p>November 18th, 2023 - 9:30 am to 12:30pm</p>

            <h3>Location of the Event</h3>
            <p>National Insititute of Technology Karnataka, Surathkal</p>

            <h3>Description</h3>
            <p>
                Welcome to API Day Coastal Karnataka, a gathering of API enthusiasts, professionals, and students. In today's tech landscape, APIs are a vital component of software development, enabling integration, automation, and scalability across various systems and platforms.
            </p>
            <p>
                It's a crucial event in today's tech world where APIs are essential for software development, offering software and hardware integration, automation, and scalability. This event is a unique opportunity for learning and networking. It's all about the latest trends and advancements in API design and development, emphasizing the API-first approach and Postman's latest features.
            </p>
            <p>
                Featuring talks by industry experts and a showcase of student projects, API Day Coastal Karnataka promises to be an enriching and engaging event for anyone interested in APIs. With ample opportunities for networking, learning, and mentorship, this event is a must-attend for anyone seeking to stay ahead of the curve in API design and development.
            </p>
            <p>
                <i>API Day Coastal Karnataka is an exclusive celebration for those who have successfully completed the COSH NITK Postman Classroom Program.</i>
            </p>
            
            <div className="row">
                <div className="rowItem">
                    <h3>Industry Panel Address: API First Design in Practice</h3>
                    <ul>
                        <li>Expert panelists from industries share insights and experiences on implementing API-first design principles in their companies.</li>
                        <li>Participants will get a glimpse of the latest trends and emerging practices in API design and development.</li>
                        {/* <li>API First philosophy</li>
                        <li>What is Postman?</li>
                        <li>Creating Postman workspaces and collections</li>
                        <li>Making GET, POST, PATCH, DELETE requests using a real Library API</li>
                        <li>Understanding API responses</li>
                        <li>Authorizing requests with API Keys</li>
                        <li>Basic scripting in Postman</li>
                        <li>Calling APIs with code</li> */}
                    </ul>
                </div>
                <div className="rowItem">
                    <h3>Student Showcase: API-Powered Innovations</h3>
                    <ul>
                        <li>Call for Proposals will be made for students who are interested to showcase their API-based projects</li>
                        <li>Engaging presentations by student innovators who have leveraged API-first design principles in their projects</li>
                        <li>Discover how these projects have addressed real-world problems and what is the future scope of these innovations.</li>
                        {/* <li>GET, POST, PATCH, DELETE requests</li>
                        <li>Request authorization</li>
                        <li>Basic scripting</li> */}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="rowItem">
                    <h3>Exploring Postman: Unlocking Niche Features</h3>
                    <ul>
                        <li>A hands-on session by a team of students exploring some of the powerful, yet lesser-known, features of Postman.</li>
                        <li>Participants will learn how to streamline their API development workflow and overcome common challenges.</li>
                        {/* <li>API First philosophy</li>
                        <li>What is Postman?</li>
                        <li>Creating Postman workspaces and collections</li>
                        <li>Making GET, POST, PATCH, DELETE requests using a real Library API</li>
                        <li>Understanding API responses</li>
                        <li>Authorizing requests with API Keys</li>
                        <li>Basic scripting in Postman</li>
                        <li>Calling APIs with code</li> */}
                    </ul>
                </div>
                <div className="rowItem">
                    <h3>Tech Trivia: Fun and Learning</h3>
                    <ul>
                        <li>An engaging quiz-based activity focused on testing participants' knowledge of APIs and Postman.</li>
                        <li>Participants will compete in teams and get a chance to win exciting goodies while learning new things.</li>
                        {/* <li>GET, POST, PATCH, DELETE requests</li>
                        <li>Request authorization</li>
                        <li>Basic scripting</li> */}
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="rowItem">
                    <h3>Event Wrap Up and Networking</h3>
                    <ul>
                        <li>A final session for participants to network, connect with experts, and share feedback on the event.</li>
                        <li>Participants can connect with fellow attendees, exchange ideas, and explore new opportunities.</li>
                        {/* <li>API First philosophy</li>
                        <li>What is Postman?</li>
                        <li>Creating Postman workspaces and collections</li>
                        <li>Making GET, POST, PATCH, DELETE requests using a real Library API</li>
                        <li>Understanding API responses</li>
                        <li>Authorizing requests with API Keys</li>
                        <li>Basic scripting in Postman</li>
                        <li>Calling APIs with code</li> */}
                    </ul>
                </div>
            </div>

            <h3>What will students get?</h3>
            <p>
                This event aims to provide a platform for knowledge sharing and collaboration around API design and development. With a focus on the API first design principle and the latest features of Postman, participants will get insights into the best practices, tools, and emerging trends in API development. 
            </p>
            <p>
                Exclusive Postman goodies and networking opportunities with API enthusiasts.
            </p>

            <h3>COSH NITK Postman Classroom Program </h3>
            <p>
                The Postman Classroom program is a series of self-paced video lessons and missions designed by Postman, designed to teach API fundamentals to college students.
                Follow the <a href="https://docs.google.com/document/d/1t9KEPSsTiEs0IXZK-SkIvRxZYFDgb3tmDSJ_l6Nru3c/edit" target="_blank">Manual</a> to know more about the program.
            </p>
            <p>
                After completing the <strong>Intro to APIs and Postman</strong> course, you can attempt the certification course, and on successful completion of the same, you shall receive your digital badge if you have submitted the correct details. To receive a certificate from the <strong>Centre for Open-source Software and Hardware (COSH) NITK</strong>, write an email with the link of the badge to <a href="mailto: cosh@nitk.edu.in">COSH.</a>
            </p>

            <figure>
                <img src="/Student-1.JPG" className='imageContainer'/>
            </figure>
            <figure>
                <img src="/Student-2.JPG" className='imageContainer'/>
            </figure>

            <hr />

            <h3>Partners</h3>
            <div className="logoGrid">
                <div className="partnershipDets">
                    <p>Sponsored By</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FPostman-logo-vertical-orange-2021.svg?alt=media&token=7faeeff1-313d-4cdb-a41e-fd142a7c0d4b" alt="" srcset="" />
                </div>
                <div className="partnershipDets">
                    <p>Academic Partner</p>
                    <img className="nitk" src="/nitk_logo.png" alt="" srcset="" />
                </div>
            </div>

            <div className="logoGrid">
                {/* <div className="partnershipDets">
                    <img src="/IEEE_Mangalore.jpg" alt="" srcset="" />
                </div> */}
            </div>

            {/* <h2>Contact Us</h2> */}
            <p className="contactCaption">For all your queries related to this certificate course, please <Link to="/contact">contact us</Link>.</p>

        </div>
    </div>
  )
}

export default Apiday