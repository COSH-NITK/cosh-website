import './Project.scss';

import React, {useEffect, useState}from 'react'
import FacultyCards from '../FacultyCards/FacultyCards'

import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";

import { getFirestore, collectionGroup, getDocs } from 'firebase/firestore/lite';

import db from '../Firebase'

async function getProject(db, id) {
    const projectsCol = collectionGroup(db, 'projects');
    const projectSnapshot = await getDocs(projectsCol);
    const projectList = projectSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    var project = {};
    for (var i = 0; i < projectList.length; i++) if(projectList[i].id === id) project = projectList[i];
    console.log(project);
    return project;
  }

function Project() {

    
    let { id } = useParams();
    
    const [project, setproject] = useState({})
    
    useEffect(() => {
        window.scrollTo(0, 0);

        getProject(db, id).then(project =>{
            setproject(project);
        })
    }, [id])

    return (
        <div className="projectDiv">
            <h1>{project.name}</h1>
            <hr />
            <p className="desc">{project.description}</p>

            <div className="subheadingRow">
                <div className="point"></div>
                <h2>Abstract</h2>
            </div>
            <p>{project.abstract}</p>
           
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
