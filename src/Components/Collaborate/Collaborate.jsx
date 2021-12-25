import './Collaborate.scss'

import React from 'react'

import il1 from '../../Assets/il_collaborate1.svg';

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
        </div>
    )
}

export default Collaborate
