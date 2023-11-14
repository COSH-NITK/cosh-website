import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

import './Postman.scss';

function Postman() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div className="postmanDiv">
        <Helmet>
            <title>Postman Program</title>
        </Helmet>
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

            {/* <h2>Details of the Certificate Course</h2> */}
            <h2>Certification: Postman API Fundamentals Student Expert</h2>

            <h3>Duration of the Certification Course</h3>
            <p>Self paced (Recommended) - 1 week</p>

            <h3>Description</h3>
            <p>This certification includes one course module that take students from knowing nothing about APIs to mastering the foundations of APIs and working with Postman. </p>
            <div className="row">
                <div className="rowItem">
                    <h3>Course Postman API Fundamentals Student Expert Certification</h3>
                    <strong>Basic Topics:</strong>
                    <ul>
                        <li>What are APIs?</li>
                        <li>API types</li>
                        <li>API First philosophy</li>
                        <li>What is Postman?</li>
                        <li>Creating Postman workspaces and collections</li>
                        <li>Making GET, POST, PATCH, DELETE requests using a real Library API</li>
                        <li>Understanding API responses</li>
                        <li>Authorizing requests with API Keys</li>
                        <li>Basic scripting in Postman</li>
                        <li>Calling APIs with code</li>
                    </ul>
                    <strong>Learning methods</strong>
                    <ul>
                        <li>Text-based learning with images</li>
                        <li>Knowledge checks</li>
                        <li>Working hands on in Postman</li>
                    </ul>
                </div>
                <div className="rowItem">
                    <div style={{height: '20%'}}></div>
                    <strong>Advanced Topics:</strong>
                    <ul>
                        <li>Completing API challenges in Postman on the theme of sports</li>
                        <li>GET, POST, PATCH, DELETE requests</li>
                        <li>Request authorization</li>
                        <li>Basic scripting</li>
                    </ul>
                    <strong>Learning methods</strong>
                    <ul>
                        <li>Challenges are presented in API responses, in Postman</li>
                    </ul>
                </div>
            </div>

            <h3>What will students get?</h3>
            <p>
            Upon completion, students will earn a Postman API Fundamentals Student Expert badge that they can share on LinkedIn and social media to prove their API and Postman skills. Besides, COSH NITK will provide a hard copy of the Certificate.
            </p>
            
            <hr />

            {/* <h2>Contact Us</h2> */}
            <p className="contactCaption">For all your queries related to this certification, please <Link to="/contact"> contact us</Link>.</p>

        </div>
    </div>
  )
}

export default Postman