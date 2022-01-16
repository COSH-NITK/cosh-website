import './ProjectCards.scss';

import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCards({projects = [], ongoing=true, domainId='0'}) {
    const validProjects = projects.filter(project => project.ongoing === ongoing)
    return (
        <div className="projectCardsDiv">
            {
                validProjects.length === 0
                ? <p>No projects to show</p>
                : validProjects.map((project, i) => ongoing === project.ongoing
                ? <ProjectCard 
                    name={project.name} 
                    description={project.description}
                    projectId={project.id}
                    domainId={domainId}
                    key={i} 
                    /> 
                : null)
            }
        </div>
    )
}

function ProjectCard({
    name= 'default title of project',
    description= 'default description of project',  
    projectId= '1',
    domianId= '1',
}) {
    return (
        <Link to={"/project/"+projectId} className="projectCardDiv">
            <h3>{name}</h3>
            <p id="projectCardDesc">{description}</p>
            <p id="readMore">Read more</p>
        </Link>
    )
}

export default ProjectCards
