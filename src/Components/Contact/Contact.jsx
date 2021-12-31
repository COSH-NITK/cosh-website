import './Contact.scss';

import React from 'react'

import bg from '../../Assets/contact_bg.jpg';

function Contact() {
    return (
        <div className="contactDiv">
            <div className="contactSection1">
                <img src={bg} className="bg" alt="background" />
                <h1>Contact us</h1>
                {/* <form className="card">
                    <h3>Send us a message</h3>
                    <label for="name">Full name: </label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name"/>
                    <label for="email">Email address: </label>
                    <input type="text" id="email" name="email" placeholder="Enter your email"/>
                    <label for="subject">Subject: </label>
                    <select>
                        <option value="0">Select Subject</option>
                        <option value="1">Collaboration</option>
                        <option value="2">Inquiry</option>
                        <option value="3">Complaint</option>
                    </select>
                    <label for="message">Your message</label>
                    <textarea id="w3review" name="w3review" rows="4" placeholder="Enter your message here">
                    </textarea>

                    <button className="button-dark">Send</button>
                </form> */}
            </div>

            {/* <div className="contactSection2">
                
            </div> */}
        </div>
    )
}

export default Contact
