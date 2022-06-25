import React, {useState, useEffect} from 'react';

import {Helmet} from "react-helmet";

import './About.scss'
import FacultyCards from '../../Components/FacultyCards/FacultyCards';
import avatar1 from '../../Components/FacultyCards/avatar1.svg';
import avatar2 from '../../Components/FacultyCards/avatar2.svg';
import avatar3 from '../../Components/FacultyCards/avatar3.svg';
import avatarF1 from '../../Components/FacultyCards/avatarF1.svg';
import getPeople from '../../Helper/getPeople';
import AvatarCircle from '../../Components/AvatarCircle/AvatarCircle';
// import nitk from '../../Assets/nitk.jpg';
import circlelogo from '../../Assets/circlelogo.svg';
import circlelogoNew from '../../Assets/circlelogo-new.svg';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function About() {

    const [people, setPeople] = useState({});
    const { width } = useWindowDimensions();
    // console.log(width);
  
    const avatars = [avatar1, avatar2, avatar3];
    const avatarsF = [avatarF1];
    const [studentRows, setStudentRows] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getPeople().then(
            (res)=>{
                // console.log(res);
                setPeople(res[0]);
            }
        )
    }, []);

    useEffect(() => {
        const nStudents = people.students ? people.students.length : 0;
        var maxRow = 7;
        // if(width<1700) maxRow = 7;
        if(width<1400) maxRow = 5;
        if(width<900) maxRow = 3;
        var n = nStudents-1;
        var l = maxRow-1;
        var odd = false;
        var row = [];
        var i = 0;
        var tempStudentRow = [];
        while(n >= 0){
            if(l===1){
                row.push(
                    <AvatarCircle
                        image = {
                            people.students && people.students[i] && people.students[i].image ? people.students[i].image :
                            people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                        name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
                        // name = {'Bru2'}
                        designation = {people.students && people.students[i] ? people.students[i].designation : 'Member'}
                        email = {people.students && people.students[i] ? people.students[i].email : null}
                        linkedin = {people.students && people.students[i] ? people.students[i].linkedin : null}
                    />
                )
                tempStudentRow.push(
                    <div className="studentRow" key={n}>
                        {row}
                    </div>
                );
                row=[];
                odd = !odd;
                if(odd) l=maxRow+1;
                else l=maxRow;
                i++;
            }
            else if (n===0) {
                // if(people.students && people.students[i+1]) i++;
                row.push(
                    <>
                        <AvatarCircle
                            image = {
                                people.students && people.students[i] && people.students[i].image ? people.students[i].image :
                                people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                            name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
                            // name = {'Bruh3'}
                            designation = {people.students && people.students[i] ? people.students[i].designation : 'Member'}
                            email = {people.students && people.students[i] ? people.students[i].email : null}
                            linkedin = {people.students && people.students[i] ? people.students[i].linkedin : null}
                        />
                    </>
                );
                if(nStudents>maxRow && l%2===0){
                    row.push(
                        <>
                            <div className="wire" style={{ visibility: "hidden" }}></div>
                            <span>
                            <img style={{ visibility: "hidden" }} src={avatars[getRandomInt(3)]} alt="" />
                            </span> 
                        </>
                    );
                    i++;
                }
            }
            else {
                row.push(
                    <>
                        <AvatarCircle
                            image = {
                                people.students && people.students[i] && people.students[i].image ? people.students[i].image :
                                people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                            name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
                            // name = {'Bruh'}
                            designation = {people.students && people.students[i] ? people.students[i].designation : 'Member'}
                            email = {people.students && people.students[i] ? people.students[i].email : null}
                            linkedin = {people.students && people.students[i] ? people.students[i].linkedin : null}
                        />
                        <div className="wire"></div>
                    </>
                )
                i++;
            }

            l--;
            n--;
        }
        tempStudentRow.push(
            <div className="studentRow">
                {row}
            </div>
        );  
        setStudentRows(tempStudentRow);
    }, [people, width]);

    return (
        <div className="aboutDiv">
            <Helmet>
                <title>About COSH NITK</title>
            </Helmet>
            <div className="aboutSection1Container">
                <object type="image/svg+xml" data={circlelogoNew} className="nitk" />
                <div className="aboutSection1">
                    {/* <img src={il} className="il" alt="Illustration" /> */}
                    {/* <div className="il"></div> */}
                    <h1>About <br />COSH NITK</h1>
                    <p>A centre dedicated to open-source software and hardware at the National Institute of Technology Karnataka, Surathkal, Mangalore, India.</p>
                </div>
            </div>
            <div className="aboutSection2 justify">
                <p>Formed in October 2021 by a team of enthusiastic faculty members, the Centre for Open-Source Software and Hardware (COSH) at NITK Surathkal has a broad multidisciplinary objective of serving society through research, education, and development of open-source technologies, and is the first of its kind in India. COSH is open to all enthusiasts of open-source software and hardware. In particular, COSH encourages the student community to adopt open-source and trains them to synchronize to the needs of the industry while also amalgamating teaching and research. There is no boundary to the scope of open-source, both in academia and industry.</p>

                <h2>Vision</h2>
                <p>To become a globally recognized organization for the adoption and development of open-source software and hardware technologies for the benefit of the students, faculty, and industry, and to serve society.</p>
                
                <h2>Mission</h2>
                <p>To foster the adoption of open-source software and hardware for multi-disciplinary research, education, and product development.</p>
                <ul>
                    <li>To advance multidisciplinary research, development, and education using open-source tools, technologies, and applications.</li>
                    <li>To guide the student, staff, and faculty community towards a deeper understanding and appreciation of open-source technologies and applications.</li>
                    <li>Promote participation in and organize, such as providing training on open-source software and hardware technologies, that benefit the community and advance open-source adoption.</li>
                    <li>Develop courses and related material on open-source software and hardware technologies.</li>
                    <li>Execute R&D projects in collaboration with academia, industry, and open-source experts.</li>
                    <li>Build cost-effective, reliable, and robust software and hardware products indigenously by leveraging open-source technologies.</li>
                    <li>Build a vibrant ecosystem on open-source technologies and foster a strong community that can make a positive social impact.</li>
                </ul>

                <h2>Stakeholders</h2>
                <span>The stakeholders of COSH NITK are:</span>
                <ol>
                    <li><b>Faculty, Staff, and Students</b></li>
                    <p>The faculty, staff, and students can learn how to leverage open-source software and hardware for academic and research purposes, and also contribute to the open-source communities. This process creates an opportunity for everyone to become experts and leaders (maintainers) in open-source tools and technologies.</p>
                    <li><b>Academic Institutions and Universities, and Research Organizations</b></li>
                    <p>Academic institutions and universities can know about various open-source alternatives to manage and auto-grade course assignments, programming exercises, and observations from hardware experiments. They can indigenously develop the right set of tools required for fulfilling local requirements. Research Organizations can collaborate with COSH NITK to develop innovative new solutions based on open-source tools and technologies and leverage the expertise of the students, staff, and faculty. Besides, COSH NITK can help provide initial feedback on the new technologies being developed by research organizations and help improve before the technologies are made open to all.</p>
                    <li><b>Industries, Government Organizations, and Open-source organizations</b></li>
                    <p>COSH NITK can serve as a hub connecting industries, government organizations, and open-source organizations, thus creating a network of subject matter experts, engineers, developers, and potential users of open-source tools and technologies. Besides, COSH NITK can assist in the design and development of solutions based on open source technologies and help in the widespread adoption of these solutions.</p>
                </ol>

                <h2>Core Committee</h2>
                <p>COSH NITK is led by Shyam S. Kamath, Professor in the Department of Mathematical and Computational Sciences with the help of Ramesh Kini M., Associate Professor in the Department of Electronics and Communication Engineering, and Mohit P. Tahiliani, Assistant Professor in the Department of Computer Science and Engineering.</p>
            </div>
            <div className="aboutSection3">
                <div className="aboutSection3Container">
                    <h2>COSH Team</h2>
                    <hr />
                    <div className="subheadingRow">
                        <div className="bullet"></div>
                        <h3>Core Committee</h3>
                    </div>
                    <FacultyCards people={people.faculty} />
                    <div className="subheadingRow">
                        <div className="bullet"></div>
                        <h3>Student Members</h3>
                    </div>
                    <div className="studentGridDiv">
                        {studentRows}
                    </div>
                </div>
            </div>
        </div>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

export default About

