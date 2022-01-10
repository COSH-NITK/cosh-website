import './Contact.scss';

import React, {useEffect, useState} from 'react'
import { send } from 'emailjs-com';

import bg from '../../Assets/contact_bg.jpg';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Contact() {

  useEffect(() => window.scrollTo(0, 0), []); 

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        category: '',
        message: '',
      });
    const [sent, setSent] = useState(0);
    
      const onSubmit = (e) => {
        console.log("submitting");
        setSent(1)
        e.preventDefault();
        send(
          'service_deh084i',
          'template_hvjlbuy',
          toSend,
          'user_M5X53c6LRReh8dn7ZUrfs'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSent(2);
            setTimeout(()=>{
                setSent(0);
            }, 5000);
            setToSend(
                {
                    from_name: '',
                    from_email: '',
                    category: '',
                    message: '',
                  }
            );
          })
          .catch((err) => {
            console.log('FAILED...', err);
            setSent(-1);
            setTimeout(()=>{
                setSent(0);
            }, 5000)
          });
      };
    
      const categoryName = ['Select category', 'Collaboration', 'Inquiry', 'Complaint'];
      const handleChange = (e) => {
        if(e.target.name==='category') setToSend({ ...toSend, [e.target.name]: categoryName[e.target.value] })
        else setToSend({ ...toSend, [e.target.name]: e.target.value })
      };

      useEffect(() => {console.log(toSend)}, [toSend]);


    return (
        <div className="contactDiv">
            <div className="contactSection1">
                {/* <img src={bg} className="bg" alt="background" />     */}
                <div className="bg"></div>
                <h1>Get in touch</h1>
                <form className="card" onSubmit={onSubmit}>
                    <h3>Send us a message</h3>
                    <label for="from_name">Full name: </label>
                    <input type="text" id="name" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder="Enter your full name"/>
                    <label for="from_email">Email address: </label>
                    <input type="text" id="email" name="from_email" value={toSend.from_email} onChange={handleChange} placeholder="Enter your email"/>
                    <label for="subject">Subject: </label>
                    <select name="category" onChange={handleChange}>
                        <option value="0">Select Subject</option>
                        <option value="1">Collaboration</option>
                        <option value="2">Inquiry</option>
                        <option value="3">Complaint</option>
                    </select>
                    <label for="message">Your message</label>
                    <textarea id="message" name="message" value={toSend.message} onChange={handleChange} rows="4" placeholder="Enter your message here">
                    </textarea>

                    <div className="sendRow">
                        <button className="button-dark" type='submit'>Send</button>
                        {
                            sent === 1
                            ? <p className="statusMessage">Sending.....</p>
                            : sent === 2
                            ? <>
                            <p className="statusMessage green">Message sent</p>
                            <BsFillCheckCircleFill className="tickIcon"/>
                            </> 
                            : sent == -1
                            ? <p className="statusMessage red">Error while sending message</p>
                            : null
                        }
                    </div>

                </form>
            </div>

            {/* <div className="contactSection2">
                
            </div> */}
        </div>
    )
}

export default Contact
