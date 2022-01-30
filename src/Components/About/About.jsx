import './About.scss'

import nitk from '../../Assets/nitk.jpg';
import il from '../../Assets/il_about.svg';
import FacultyCards from '../FacultyCards/FacultyCards';
import avatar1 from '../FacultyCards/avatar1.svg';
import avatar2 from '../FacultyCards/avatar2.svg';
import avatar3 from '../FacultyCards/avatar3.svg';
import avatarF1 from '../FacultyCards/avatarF1.svg';

import React, {useState, useEffect} from 'react';
import { getFirestore, collectionGroup, collection, getDocs, Timestamp, where} from 'firebase/firestore/lite';
import { motion } from "framer-motion";
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import db from '../Firebase';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getPeople(db) {
    const peopleCol = collection(db, 'team');
    const peopleSnapshot = await getDocs(peopleCol);
    var peopleList = peopleSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    // console.log('people', peopleList);
    return peopleList;
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
        getPeople(db).then(
            (res)=>{
                console.log(res);
                setPeople(res[0]);
            }
        )
    }, []);

    useEffect(() => {
        const nStudents = people.students ? people.students.length : 0;
        var maxRow = 9;
        if(width<1700) maxRow = 7;
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
            else if (n==0) {
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
                if(nStudents>maxRow && l%2==0){
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
            <div className="aboutSection1">
                {/* <img src={il} className="il" alt="Illustration" /> */}
                <div className="il"></div>
                <h1>About <br />COSH NITK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. </p>
                <img src={nitk} className="nitk" alt="nitk" />
            </div>
            <div className="aboutSection2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus ipsum consequat cursus amet blandit nullam amet. Egestas in vulputate elementum nam bibendum. Aliquet at elementum, fames amet lacus, ultrices suspendisse scelerisque. Elit felis et, volutpat eget in at maecenas lectus netus. Iaculis morbi neque, fringilla quam porttitor lacinia. Iaculis duis arcu lectus laoreet gravida fames donec cursus mauris. Lacinia in et felis ornare interdum elementum. Ultrices penatibus ullamcorper amet justo. Rhoncus facilisis dignissim dui porttitor purus facilisis dignissim integer pulvinar.</p>
            </div>
            <div className="aboutSection3">
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

function AvatarCircle({
    image = avatar1,
    name = 'Aadil',
    email,
    linkedin,
}) {

    const [isMouse, toggleMouse] = React.useState(false);
    const toggleMouseMenu = () => {
        toggleMouse(!isMouse);
    };
    const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.3
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
        //   translateY: 20,
          transition: {
            duration: 0.3,
            delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
      };

  return <span>
      <motion.div
            className="menu-item"
            onMouseEnter={toggleMouseMenu}
            onMouseLeave={toggleMouseMenu}
          >
            {/* <a href="/">Menu Item</a> */}
            <img src={image} alt="" />
            <div className="label2">
                <motion.div
                className="sub-menu"
                initial="exit"
                animate={isMouse ? "enter" : "exit"}
                variants={subMenuAnimate}
                >
                <p>{name}</p>
                <div className="iconRow">
                {
                    !email ? null :
                    <a href = {"mailto: "+email}><AiFillMail size="20" /></a>

                }
                {
                    !linkedin ? null :
                    <a href = {linkedin} target="_blank"><AiFillLinkedin size="20" /></a>

                }
                </div>
                </motion.div>
            </div>
          </motion.div>
    </span>;
}

