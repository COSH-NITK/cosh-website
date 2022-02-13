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
                console.log(res);
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
                        image = {people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                        name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
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
            }
            else if (n===0) {
                row.push(
                    <>
                        <AvatarCircle
                            image = {people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                            name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
                            email = {people.students && people.students[i] ? people.students[i].email : null}
                            linkedin = {people.students && people.students[i] ? people.students[i].linkedin : null}
                        />
                    </>
                );
                i++;
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
                            image = {people.students && people.students[i] && people.students[i].gender === "F" ? avatarsF[getRandomInt(avatarsF.length)] : avatars[getRandomInt(avatars.length)]}
                            name = {people.students && people.students[i] ? people.students[i].name : 'Aadil'}
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
                <title>About COSH NTIK</title>
            </Helmet>
            <div className="aboutSection1">
                {/* <img src={il} className="il" alt="Illustration" /> */}
                <div className="il"></div>
                <h1>About <br />COSH NITK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. </p>
                <img src={'https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2FAbout%20page%2Fnitk.jpg?alt=media&token=2fe218ee-be2d-44b2-80b9-fa6d1942f8db'} className="nitk" alt="nitk" />
            </div>
            <div className="aboutSection2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
            </div>
            <div className="aboutSection3">
                <div className="aboutSection3Container">
                    <h2>Cosh Team</h2>
                    <hr />
                    <div className="subheadingRow">
                        <div className="bullet"></div>
                        <h3>Faculty members</h3>
                    </div>
                    <FacultyCards people={people.faculty} />
                    <div className="subheadingRow">
                        <div className="bullet"></div>
                        <h3>Student members</h3>
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

