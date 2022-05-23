import React from 'react'

import './Postman.scss';
import il1 from '../../Assets/il_postman1.svg';


function Postman() {
  return (
    <div className="postmanDiv">
        <div className="postmanSection1Container">
            <div className="postmanSection1">
                <h1>COSH NITK Postman Classroom Program</h1>
                <img src={il1} className="il1" alt="Illustration" />
            </div>
        </div>
        <div className="postmanSection2">
            <div className="logoGrid">
                <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FNITK-logo.png?alt=media&token=9a127e52-65ca-467b-b4ea-a80711247e78" alt="" srcset="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2FCOSH-logo.png?alt=media&token=7cec2409-ffe1-4145-8148-22620e3d0512" alt="" srcset="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2Flogos%2Fpostman-logo.png?alt=media&token=2f1661c3-68ee-4def-8145-2a7fcafbcca2" alt="" srcset="" />
            </div>
        </div>
        <div className="postmanSection3">
            <h2>About</h2>
            <p>API, or Application Programming Interface, is a software-to-software interface that enables two applications to exchange data with each other. In a world increasingly dominated by digital, APIs are an integral part of our daily lives. They are a part of almost everything we do. Each time we use an app like Facebook, send an instant message or check the weather on our phone, we're using an API!</p>
            <p>APIs allow the line of business users and IT to leverage software and applications to increase productivity and improve the bottom line. From social collaboration tools to more innovative approaches to customer outreach, taking advantage of APIs can prove dividends within the enterprise.</p>
            <p>To promote API Literacy and API-First Principles amongst BITS students, Postman, a BITS Alumnus startup turned Unicorn (and a Pioneer in API Industry), is offering an "API-based Programming Course" to all BITSians across all four campuses. The second round of the course offering shall start on Jan 25, 2022. The mode of the course shall be online with live lectures and tutorials for all the modules. and shall be free of cost! It shall give an opportunity to all BITSians to delve into API-based literacy, which is currently being offered to leading institutions globally!</p>

            <hr />

            <h2>Course Info</h2>
            <p>The API-based programming course is a three module course with the following structure:</p>
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
                <li>FREE of cost for all BITSIANs across all campuses</li>
                <li>No Pre-requisites</li>
                <li>Open to students from all disciplines and batches</li>
            </ul>

            <h3>What will you get?</h3>
            <ul>
                <li>Free Access to Postman Enterprise License worth $828/year/user</li>
                <li>Postman Student Expert Badge (on completion of additional student expert module)</li>
                <li>Certificate of Course Completion (Printable Soft Copy only)</li>
                <li>Opportunity to learn API-based programming that is currently being offered to leading institutions globally!</li>
            </ul>

            <h3>Mode of Delivery</h3>
            Online Mode.  Live lecture and tutorial sessions for every module (links given in the following sections)

            <hr />

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

            <hr />

            <h2>Course Logistics</h2>
            <ul>
                <li>Students can complete all three modules of the course with the help of live lectures and tutorial sessions that shall be conducted for each module.  The recordings of the live sessions will be made available to all the registered students.</li>
                <li>Students can also take the help of the video recordings (created by Postman) that are associated with each module over the Postman platform. </li>
                <li>There will be online doubt clearing sessions (office hours) for each of the modules by the Postman team whose details will be shared with the registered students via email.</li>
                <li>Students can also take the help of the discord community for queries related to the course modules. Here is the link: <a href="https://discord.gg/Fm9Mcz26QF">https://discord.gg/Fm9Mcz26QF</a></li>
                <li>For all your queries related to course logistics, please write to <a href="bits-postman-lab@pilani.bits-pilani.ac.in">bits-postman-lab@pilani.bits-pilani.ac.in</a></li>
                <li>The deadline to finish all three modules is March 27, 2022. Students who finish by the deadline shall be awarded the Certificate of Completion. The certificate shall be a printable PDF copy. We won't be issuing hard copies owing to COVID-19 protocols and minimizing paper usage.</li>
                <li>After finishing all three modules of the course, students can register for the student expert program and claim their Student Expert Badge. The details are given below.</li>
                <li>Students who finish all three modules can apply for Postman Team License, whose details are given below.</li>
            </ul>

            <hr />

            <h2>Student Expert Badge</h2>
            <ul>
                <li>Students who complete all three modules of the API course can register for the student expert program. They can complete this additional student expert module and claim their Student Expert Badge.</li>
                <li>The badge is a digital badge and shall be shared with you via email. This badge can be displayed over social media websites</li>
                <li>Click Here to register.</li>                
            </ul>
            <p>Click here to register for our API-programming hackathon.</p>

            <hr />

            <h2>Postman Team License</h2>
            <ul>
                <li>Students who complete all three modules of the API course are eligible to apply for the Postman Team License.</li>
                <li>Click Here to know about the features of the Postman Team License.</li>
                <li>The team license shall be activated on your BITS Pilani email IDs only.</li>
                <li>Please fill the form to apply for the Postman Team License: Click here</li>
            </ul>

            <hr />

            <h2>Contact Us</h2>
            <p>For all your queries, please write to bits-postman-lab@pilani.bits-pilani.ac.in</p>

            <hr />

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
            </ul>
        </div>
    </div>
  )
}

export default Postman