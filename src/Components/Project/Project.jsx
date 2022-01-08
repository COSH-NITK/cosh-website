import './Project.scss';

import React, {useEffect}from 'react'
import FacultyCards from '../FacultyCards/FacultyCards'

import {Link} from 'react-router-dom'

function Project() {

    useEffect(() => window.scrollTo(0, 0))

    return (
        <div className="projectDiv">
            <h1>This is the project title</h1>
            <hr />
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. </p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Abstract</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu malesuada eleifend massa odio non ornare. </p>
           
            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Objectives</h2>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bulletRow">
                <div className="bullet">
                    <div className="left"></div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>GitHub/GitLab repository</h2>
            </div>
            <a href="https://github.com/arpit0891/Plant-Disease-Detection-Web-application">Link to repository</a>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Faculty members</h2>
            </div>
            <FacultyCards />

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Student members</h2>
            </div>
            <FacultyCards />
            <Link to={"/domains"} className="button-dark">Back to all projects</Link>
        </div>
    )
}

export default Project
