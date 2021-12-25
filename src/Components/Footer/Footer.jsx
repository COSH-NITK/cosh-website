import './Footer.scss';
import logo from '../../Assets/logo2.svg';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import il from '../../Assets/il_footer.svg';

import React from 'react'

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footerDiv">
            <img src={il} className="il" alt="Illustration" />
            <img src={logo} className="logo" alt="logo" />
            <div className="footerColumn">
                {/* <a href="">Home</a>
                <a href="">How we work</a>
                <a href="">Domains</a>
                <a href="">Blog</a> */}
                <Link to="/home">Home</Link>
                <Link to="/about">How we work</Link>
                <Link to="/domains">Domains</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className="footerColumn">
                <Link to="/about">About</Link>
                <Link to="/collaborate">Collaborate</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footerColumn">
                <h3>Follow us</h3>
                <div className="iconRow">
                    <FiTwitter className="icon" />
                    <FiLinkedin className="icon" />
                    <FiGithub className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer
