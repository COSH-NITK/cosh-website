import './FacultyCards.scss';
import avatar1 from './avatar1.svg';
import avatar2 from './avatar2.svg';
import avatar3 from './avatar3.svg';

import React from 'react'

function FacultyCards({len=4}) {
    return (
        <div className="facultyCardsDiv">
            {
                [...Array(len)].map((e, i) => <FacultyCard key={i} />)
            }
        </div>
    )
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function FacultyCard() {

    const avatars = [avatar1, avatar2, avatar3];

    return (
        <div className="facultyCardDiv" >
            {/* <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /> */}
            <img src={avatars[getRandomInt(3)]} alt="" />
            <div>
                <h4>Steve Morin</h4>
                <p>Chairman</p>
                <p>COSH NITK</p>
            </div>
        </div>
    )
}

export default FacultyCards
