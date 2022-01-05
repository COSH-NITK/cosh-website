import './ProjectCards.scss';

import React from 'react'

function ProjectCards() {
    return (
        <div className="projectCardsDiv">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}

function ProjectCard() {
    return (
        <div className="projectCardDiv">
            <h3>This is the title of the project</h3>
            <p id="projectCardDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis tellus egestas facilisis scelerisque.</p>
            <p id="readMore">Read more</p>
        </div>
    )
}

export default ProjectCards
