import './About.scss'

import nitk from '../../Assets/nitk.jpg';

import React from 'react'

function About() {
    return (
        <div className="aboutDiv">
            <div className="aboutSection1">
                <h1>About <br />COSH NITK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. </p>
                <img src={nitk} className="nitk" alt="image" />
            </div>
            <div className="aboutSection2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
            </div>
        </div>
    )
}

export default About
