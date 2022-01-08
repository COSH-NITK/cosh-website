import './ProjectCards.scss';

import React from 'react'
import { Link } from 'react-router-dom';

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
        <Link to={"/project/1"} className="projectCardDiv">
            <h3>This is the title of the project</h3>
            <p id="projectCardDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis tellus egestas facilisis scelerisque.</p>
            <p id="readMore">Read more</p>
        </Link>
    )
}

export default ProjectCards
