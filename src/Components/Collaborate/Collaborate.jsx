import './Collaborate.scss'

import React from 'react'

import il1 from '../../Assets/il_collaborate1.svg';
import il2 from '../../Assets/il_collaborate2.svg';

function Collaborate() {
    return (
        <div className="collaborateDiv">
            <div className="collaborateSection1">
                <img src={il1} className="il1" alt="Illustration" />
                <h1>Collaborate with us</h1>
                <div className="buttonRow">
                    <div className="button-light">Industry</div>
                    <div className="button-light">Academia</div>
                    <div className="button-light">Student</div>
                </div>
            </div>
            <div className="collaborateSection2">
                <img src={il2} className="il2" alt="Illustration" />
                <div className="collaborateEach right">
                    <h1>Industry</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <div className="button-dark">Contact</div>
                </div>
                <div className="collaborateEach left">
                    <h1>Academia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <div className="button-dark">Contact</div>
                </div>
                <div className="collaborateEach right">
                    <h1>Student</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <div className="button-dark">Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Collaborate
