import React, {useEffect, useState}from 'react'

import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import {BsFillTagsFill} from 'react-icons/bs';

import FacultyCards from '../../Components/FacultyCards/FacultyCards'
import Loading from '../../Components/Loading/Loading'
import './Project.scss';
import getProject from '../../Helper/getProject';

function Project() {

    
    let { id } = useParams();
    
    const [project, setproject] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0, 0);

        getProject(id).then(project =>{
            setproject(project);
            setLoading(false);
        })
    }, [id]);

    return (
        loading ? <Loading/> : 
        <div className="projectDiv">
            <div className="projectDivContainer">            
                <h1>{project.name}</h1>
                <hr />
                {
                    !project.note ? null :
                    <div className="noteDiv">
                        <div className="noteHeadingRow">
                            <BsFillTagsFill></BsFillTagsFill>
                            <p>Note</p>
                        </div>
                        <p>{project.note}</p>
                    </div>
                }
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
                {
                    !project.objectives ? null : project.objectives.map((objective, i)=>{
                        return <div className="bulletRow" key={i}>
                        <div className="bullet">
                            <div className="left"></div>
                            <div className="center"></div>
                            <div className="right"></div>
                        </div>
                        <p>{objective}</p>
                    </div>
                    })
                }
                

                <div className="subheadingRow">
                    <div className="point"></div>
                    <h2>GitHub/GitLab repository</h2>
                </div>
                {
                    project.repo_link
                    ? <a href={project.repo_link}>{project.repo_link}</a>
                    : <p>No repository link available.</p>
                }
                {
                    !project.faculty_members 
                    ? null
                    : <>
                        <div className="subheadingRow">
                            <div className="point"></div>
                            <h2>Faculty members</h2>
                        </div>
                        <FacultyCards people={project.faculty_members} />
                    </>
                }
                {
                    !project.student_members 
                    ? null
                    : <>
                        <div className="subheadingRow">
                            <div className="point"></div>
                            <h2>Student members</h2>
                        </div>
                        <FacultyCards people={project.student_members} />
                    </>
                }
                
                <Link to={"/domains"} className="button-dark">Back to all projects</Link>
            </div>
        </div>
    )
}

export default Project
