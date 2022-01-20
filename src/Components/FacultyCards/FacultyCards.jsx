import './FacultyCards.scss';
import avatar1 from './avatar1.svg';
import avatar2 from './avatar2.svg';
import avatar3 from './avatar3.svg';

import React from 'react'
import { GrMail } from 'react-icons/gr';

function FacultyCards({
    people = [],
}) {
    return (
        <div className="facultyCardsDiv">
            {
                people.map((p, i) => <FacultyCard person={p} key={i} />)
            }
        </div>
    )
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function FacultyCard({
    person = {},
}) {

    const avatars = [avatar1, avatar2, avatar3];


    return (
        <div className="facultyCardDiv" >
            {/* <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /> */}
            <img src={avatars[getRandomInt(3)]} alt="" />
            <div>
                <h4>{person.name}</h4>
                <p className="cardTitle">{person.title}</p>
                <p className="cardOrg">{person.org}</p>
                <a href = {"mailto: "+person.email}><GrMail size="25" /></a>
            </div>
        </div>
    )
}

export default FacultyCards
