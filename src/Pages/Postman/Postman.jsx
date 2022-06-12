import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Postman.scss';
import il1 from '../../Assets/il_postman1.svg';


function Postman() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div className="postmanDiv">
        <div className="postmanSection1Container">
            <div className="postmanSection1">
                <h1>COSH NITK <span>Postman</span> Classroom Program</h1>
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
            <h2>About</h2>
            <p>Application Programming Interface (API) is a software-to-software interface that enables two applications to exchange data with each other. In a world increasingly dominated by digital, APIs are an integral part of our daily lives. They are a part of almost everything we do on the Internet. Each time we use an application like Instagram, send an instant message or check the latest news on our phones, we're using an API!</p>
            <p>APIs allow the line of business users and IT to leverage software and applications to increase productivity and improve the bottom line. From social collaboration tools to more innovative approaches to customer outreach, taking advantage of APIs can prove dividends within the enterprise.</p>
            <p>To promote API Literacy and API-First Principles amongst the students of NITK Surathkal, Postman, a startup turned Unicorn (and a Pioneer in API Industry), is offering a Certification Course on “API-based Programming”. The first round of the course offering will start in August 2022. The mode of the course will be online with live lectures and tutorials for all the modules, and will be free of cost! It will give an opportunity to all the students at NITK Surathkal to delve into API-based literacy, which is currently being offered to leading institutions globally!</p>

            <hr />

            <h2>Details of the Certificate Course</h2>
            <p>The certificate course on “API-based Programming” is a three module course with the following structure:</p>
            <div className="row">
                <div className="rowItem">
                    <h3>API 101: API Fundamentals</h3>
                    <strong>Topics:</strong>
                    <ul>
                        <li>What are APIs?</li>
                        <li>Servers & Clients</li>
                        <li>Making HTTP requests to an API</li>
                        <li>Understanding API responses</li>
                        <li>Submitting data to APIs</li>
                        <li>Using query parameters to refine requests</li>
                    </ul>
                    <strong>Assignment:</strong>
                    <p>Librarian simulation using a Library API</p>
                </div>
                <div className="rowItem">
                    <h3>API 102: Building Workflows with APIs</h3>
                    <strong>Topics:</strong>
                    <ul>
                        <li>Using Authorization to make requests</li>
                        <li>Calling a real-world REST API</li>
                        <li>Using variables and chaining multiple API calls to build a workflow </li>
                        <li>Visualizing response data</li>
                    </ul>
                    <strong>Assignment:</strong>
                    <p>Build a workflow that uses the Spotify API to recommend music based on three seed artists</p>
                </div>
                <div className="rowItem">
                    <h3>API 103: Building Applications with APIs</h3>
                    <strong>Topics:</strong>
                    <ul>
                        <li>Using Glitch as a web server for your app</li>
                        <li>Building a web app using Node/Express, HTML and JavaScript</li>
                        <li>Translating workflows into code</li>
                        <li>Debugging apps with Postman</li>
                    </ul>
                    <strong>Assignment:</strong>
                    <p>Build a full stack application (Node.js/Express/HTML/JS) that uses the Spotify API to recommend music based on three seed artists</p>
                </div>
            </div>

            <h3>Course Features</h3>
            <ul>
                <li>Each module shall have 1-2 hours of lecture delivery, followed by an assignment</li>
                <li>Tutorials hours for each module where students will get assistance to solve the assignments</li>
                <li>Office hours for Postman for assistance in the completion of assignments</li>
                <li>Self-paced with a recommended time of  4 weeks to complete</li>
                <li>Free of cost for all the students of NITK Surathkal</li>
                <li>No Pre-requisites</li>
                <li>Open to students from all disciplines and batches</li>
            </ul>

            <h3>What will students get?</h3>
            <ul>
                <li>Postman Student Expert Badge (on completion of additional student expert module)</li>
                <li>Certificate of Course Completion (Printable Soft Copy only)</li>
                <li>Opportunity to learn API-based programming that is currently being offered to leading institutions globally!</li>
            </ul>

            <h3>Mode of Delivery</h3>
            Live lectures and tutorial sessions for every module.

            {/* <hr />

            <h2>Dates and Registration</h2>
            Course Start Date: 25 January 2022

            <hr />

            <h2>Schedule of live Sessions</h2>
            <h3>Live Lecture Sessions:</h3>
            <h3>Live Tutorial Sessions:</h3>

            <strong>NOTE: Recordings of all the lecture and tutorial sessions shall be made available on this page, post-completion.</strong>

            <hr />

            <h2>Some Additional Resources</h2>
            <p>Some additional resources to learn the basics of JavaScript and HTML can be found on the following link:</p>
            <a href="https://github.com/bitsacm/Slack-Stock-DAG/blob/master/frontend.md">https://github.com/bitsacm/Slack-Stock-DAG/blob/master/frontend.md</a>
            <p>Students are advised to go through the resources related to the basics of JavaScript and HTML (just the basics) before the lecture session of API 103. It will help you in comprehending the content better.</p>

            <hr /> */}

            <hr />

            <h2>Course Logistics</h2>
            <ul>
                <li>Students can complete all three modules of the course with the help of live lectures and tutorial sessions that shall be conducted for each module. The recordings of the live sessions will be made available to all the registered students.</li>
                <li>Students can also take the help of the video recordings (created by Postman) that are associated with each module over the Postman platform.</li>
                <li>There will be online doubt clearing sessions (office hours) for each of the modules by the Postman team whose details will be shared with the registered students via email.</li>
                <li>Students who finish by the deadline shall be awarded the Certificate of Completion. The certificate shall be a printable PDF copy.</li>
                <li>After finishing all three modules of the course, students can register for the student expert program and claim their Student Expert Badge. The details are given below.</li>
            </ul>

            <hr />

            <h2>Student Expert Badge</h2>
            <ul>
                <li>Students who complete all three modules of the API course can register for the student expert program. They can complete this additional student expert module and claim their Student Expert Badge.</li>
                <li>The badge is a digital badge and will be shared with you via email. This badge can be displayed over social media platforms, such as LinkedIn.</li>
                {/* <li>Click Here to register.</li>                 */}
            </ul>

            <hr />

            {/* <h2>Contact Us</h2> */}
            <p className="contactCaption">For all your queries related to this certificate course, please contact us.</p>
            <Link to="/contact" className="button-dark">Contact Us</Link>

            {/* <hr />

            <h2>Team</h2>
            <ul>
                <li>Dr. Jagat Sesh Challa</li>
                <li>Dr. Jagat Sesh Challa</li>
                <li>Dr. Jagat Sesh Challa</li>
            </ul>

            <hr />

            <h2>Volunteers and Teaching Assistants</h2>
            <ul>
                <li>Abhirath Anupam Joshi - Student Coordinator (f20191136@pilani.bits-pilani.ac.in)</li>
                <li>Ishpreet Singh Sood (f20200651@pilani.bits-pilani.ac.in)</li>
                <li>Abhirath Anupam Joshi - Student Coordinator (f20191136@pilani.bits-pilani.ac.in)</li>
                <li>Ishpreet Singh Sood (f20200651@pilani.bits-pilani.ac.in)</li>
            </ul> */}
        </div>
    </div>
  )
}

export default Postman