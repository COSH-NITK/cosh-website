import React from 'react'

import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import './FacultyCards.scss';
import avatar1 from './avatar1.svg';
import avatar2 from './avatar2.svg';
import avatar3 from './avatar3.svg';
import avatarF1 from './avatarF1.svg';

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

    const avatarsM = [avatar1, avatar2, avatar3];
    const avatarsF = [avatarF1];


    return (
        <div className="facultyCardDiv" >
            {
                person.image 
                ? <img src={person.image} alt="" />
                : person.gender && person.gender === "F" 
                ? <img src={avatarsF[getRandomInt(avatarsF.length)]} alt="" />
                : <img src={avatarsM[getRandomInt(avatarsM.length)]} alt="" />
            }
            <div>
                <h4>{person.name}</h4>
                <p className="cardTitle">{person.title}</p>
                <p className="cardOrg">{person.org}</p>
                <div className="iconsRow">
                    {
                        !person.email ? null :
                        <a href = {"mailto: "+person.email}><AiFillMail size="25" /></a>

                    }
                    {
                        !person.linkedin ? null :
                        <a href = {person.linkedin} target="_blank"><AiFillLinkedin size="25" /></a>

                    }
                </div>
            </div>
        </div>
    )
}

export default FacultyCards
