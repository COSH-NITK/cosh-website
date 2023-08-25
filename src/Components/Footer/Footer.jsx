import React from 'react'

import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Footer.scss';
import logo from '../../Assets/logo2.svg';
import il from '../../Assets/il_footer.svg';

function Footer() {

    var year = new Date().getFullYear();

    return (
        <div className="footerContainer">
            <div className="footerDiv">
                <img src={il} className="il" alt="Illustration" />
                <Link to={'/home'}>
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <div className="footerColumn">
                    {/* <a href="">Home</a>
                    <a href="">How we work</a>
                    <a href="">Domains</a>
                    <a href="">Blog</a> */}
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    {/* <Link to="/how-we-work">How we work</Link> */}
                    <Link to="/collaborate" onClick={()=>window.scrollTo(0, 0)}>Collaborate</Link>
                    <Link to="/postman-classroom-program">Postman Program</Link>
                </div>
                <div className="footerColumn">
                    <Link to="/domains">Domains</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footerColumn">
                    <h3>Follow us</h3>
                    <div className="iconRow">
                        <a href = "https://twitter.com/cosh_nitk" target="_blank"><FiTwitter className="icon" /></a>
                        <a href = "https://www.linkedin.com/in/cosh-nitk-5aaa07222/" target="_blank"><FiLinkedin className="icon" /></a>
                        <a href = "https://github.com/COSH-NITK" target="_blank"><FiGithub className="icon" /></a>
                        <a href = "https://www.instagram.com/cosh_nitk/" target="_blank"><FiInstagram className="icon" /></a>
                    </div>
                </div>
            </div>
            <div className="copyrightDiv">
                <p>
                    © {year} Copyright COSH | Made with ❤️ by COSH Team | <a href="https://github.com/COSH-NITK/cosh-website" target="_blank">Source code</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
