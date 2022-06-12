import React from 'react'

import { Link } from 'react-router-dom';

import './ProjectCards.scss';

function ProjectCards({projects = [], ongoing=true, any=false, domainId='0'}) {
    const validProjects = projects
        .filter(project => any ? true : project.ongoing === ongoing)
        .filter(project => project.name);
    return (
        <div className="projectCardsDiv">
            {
                validProjects.length === 0
                ? <p>No projects to show</p>
                : validProjects.map((project, i) => 
                <ProjectCard 
                    name={project.name} 
                    description={project.description}
                    projectId={project.id}
                    domainId={domainId}
                    collaboration={project.collaboration}
                    key={i} 
                    />)
            }
        </div>
    )
}

function ProjectCard({
    name= 'default title of project',
    description= 'default description of project',  
    projectId= '1',
    domianId= '1',
    collaboration=false,
}) {
    return (
        <Link to={"/project/"+projectId} className="projectCardDiv">
            {
                collaboration ? <p className="tag">Open for collaboration</p> : null
            }
            <h3>{name}</h3>
            <p id="projectCardDesc">{description}</p>
            <p id="readMore">Read more</p>
        </Link>
    )
}

export default ProjectCards
