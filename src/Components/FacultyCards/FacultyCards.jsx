import './FacultyCards.scss';

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

function FacultyCard() {
    return (
        <div className="facultyCardDiv" >
            <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
            <div>
                <h4>Steve Morin</h4>
                <p>Chairman</p>
                <p>COSH NITK</p>
            </div>
        </div>
    )
}

export default FacultyCards
