import React, {useEffect, useState } from 'react'

import { send } from 'emailjs-com';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillHome, AiFillMail } from 'react-icons/ai';
import {Helmet} from "react-helmet";
import Select from 'react-select';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';

import './Contact.scss';

const notify = () => toast('Here is your toast.');

const options = [
  { value: 'Collaboration', label: 'Collaboration' },
  { value: 'Inquiry', label: 'Inquiry' },
  { value: 'Complaint', label: 'Complaint' },
];

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

function Contact({domainList}) {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => console.log('verified: ', verified), [verified]);

  useEffect(() => window.scrollTo(0, 0), []); 

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        category: '',
        message: '',
      });
    const [sent, setSent] = useState(0);
    
      const onSubmit = (e) => {
        e.preventDefault();

        if(!verified){
          toast.error("Please complete captcha verification.");
          return;
        }
        if(toSend.from_name===''){
          toast.error("Please enter your name.");
          return;
        }
        if(toSend.from_email===''){
          toast.error("Please enter your email.");
          return;
        }
        if(toSend.message===''){
          toast.error("Please enter a message.");
          return;
        }

        
        const myPromise = send(
          'service_deh084i',
          'template_hvjlbuy',
          toSend,
          'user_M5X53c6LRReh8dn7ZUrfs'
        );

        toast.promise(myPromise, {
          loading: 'Sending email...',
          success: 'Email sent successfully.',
          error: 'Error while sending.',
        });
        setToSend(
            {
                from_name: '',
                from_email: '',
                category: '',
                message: '',
              }
        );
        return;
        console.log("submitting");
        setSent(1)
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
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
      };

      useEffect(() =>{
        setToSend({ ...toSend, 'category': selectedCategory, 'project':selectedProject })
      }, [selectedCategory, selectedProject])

      useEffect(() => {console.log(toSend)}, [toSend]);

      const groupedOptions = domainList.map((d, i)=>{
        var p = d.projects.filter(p=>typeof p.name !== 'undefined');
        var options = p.map((project, i)=>{
          if(typeof project.name !== 'undefined')
          return {
            value: project.name,
            label: project.name,
          }
        });
        return {
          label: d.name,
          options: options,
        }
      })


    return (
        <div className="contactDiv">
          <Helmet>
                <title>Contact us</title>
            </Helmet>
            <div className="contactSection1Container">
              <div className="contactSection1">
                  <h1>Contact us</h1>
                  <div className="contactDetails">
                    <div className="row">
                      <AiFillHome size="20"></AiFillHome>
                      <p>National Institute of Technology <br></br> Karnataka, Surathkal, Mangalore - 575 025</p>
                    </div>
                    <div className="row">
                      <AiFillMail size="20"></AiFillMail>
                      <p>cosh@nitk.edu.in</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="contactSection2Container">
            <div className="contactSection2">
              <div className="contactSection2Left">
                <h3>How can we help?</h3>
                <p>Send us a message with any questions or requests you have.</p>
              </div>
              {/* <form className="card" onSubmit={onSubmit}>  */}
              <form className="card" onSubmit={onSubmit}> 
                      {/* <h3>Send us a message</h3> */}

                      <input type="text" id="name" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder="Enter your full name"/>

                      <input type="text" id="email" name="from_email" value={toSend.from_email} onChange={handleChange} placeholder="Enter your email"/>

                      {/* <div class="input-field">
                        <input type="text" id="from_email" name="from_email" value={toSend.from_email} onChange={handleChange} required />
                        <label for="from_email">Email address:</label>
                      </div> */}


                      <Select
                        className="contactDropdown"
                        onChange={(r)=>setSelectedCategory(r.value)}
                        options={options}
                        placeholder="Select subject"
                      />

                      <Select
                        className="contactDropdown"
                        onChange={(r)=>setSelectedProject(r.value)}
                        isClearable={true}
                        options={groupedOptions}
                        formatGroupLabel={formatGroupLabel}
                        placeholder="Select Project"
                      />
                      {/* <label for="message">Your message</label> */}
                      <textarea 
                        id="message" 
                        name="message" 
                        value={toSend.message} 
                        onChange={handleChange}
                        rows="4" 
                        placeholder="Enter your message here"
                        >
                      </textarea>

                      {/* <div class="input-field">
                        <textarea type="text" id="message" name="message" value={toSend.message} onChange={handleChange} required />
                        <label for="message">Enter your message:</label>
                      </div> */}
                      <ReCAPTCHA
                        sitekey="6Lf_baceAAAAAB-egeWIlq5aS87ZRN7OBDpZ1DbA"
                        onChange={()=>setVerified(true)}
                        onExpired={()=>setVerified(false)}
                      />

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
                              : sent === -1
                              ? <p className="statusMessage red">Error while sending message</p>
                              : null
                          }
                      </div>

                  </form>
              </div>
            </div>
        </div>
    )
}

export default Contact
