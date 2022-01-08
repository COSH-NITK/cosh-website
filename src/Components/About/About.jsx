import './About.scss'

import nitk from '../../Assets/nitk.jpg';
import il from '../../Assets/il_about.svg';
import FacultyCards from '../FacultyCards/FacultyCards'

import React, {useState, useEffect} from 'react'

function About() {

    useEffect(() => window.scrollTo(0, 0));

    const { width } = useWindowDimensions();
    // console.log(width);

    
    const nStudents = 28;
    var maxRow = 7;
    if(width<1400) maxRow = 5;
    if(width<900) maxRow = 3;

    // if(isTabletOrMobile) maxRow = 5;

    var studentRows = [];
    var n = nStudents-1;
    var l = maxRow-1;
    var odd = false;
    var row = [];
    while(n >= 0){
        if(l===1){
            row.push(
                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" key={n} / >
            )
            studentRows.push(
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
                    <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" key={n}/>
                </>
            )
            if(nStudents>maxRow && l%2==0){
                row.push(
                    <>
                        <div className="wire" style={{ visibility: "hidden" }}></div>
                        <img style={{ visibility: "hidden" }} src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                    </>
                )
            }
        }
        else {
            row.push(
                <>
                    <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                    <div className="wire"></div>
                </>
            )
        }

        l--;
        n--;
    }
    studentRows.push(
        <div className="studentRow">
            {row}
        </div>
    );  

    
    // studentRows.push(buildRow(7, true));
    // studentRows.push(buildRow(5, true));
    // studentRows.push(buildRow(2, true));
    // studentRows.push(buildRow(3, true));

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
                <FacultyCards len={5} />
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
