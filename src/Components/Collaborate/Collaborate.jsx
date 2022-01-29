import './Collaborate.scss'

import React, { useRef, useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import il1 from '../../Assets/il_collaborate1.svg';
import il2 from '../../Assets/il_collaborate2.svg';

function Collaborate() {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const scrollTo1 = () => ref1.current.scrollIntoView({behavior: "smooth"});
    const scrollTo2 = () => ref2.current.scrollIntoView({behavior: "smooth"});
    const scrollTo3 = () => ref3.current.scrollIntoView({behavior: "smooth"});

    const location = useLocation()
    console.log(location);

    useEffect(() => {
        if(location.state!=null){
            const { goto } = location.state
            // console.log("goto: "+goto);
            if(goto === 1) {
                // console.log("section 1");
                scrollTo1();
            }
            if(goto === 2) {
                // console.log("section 2");
                scrollTo2();
            }
            if(goto === 3) {
                // console.log("section 3");
                scrollTo3();
            }
        }
      });

    

    return (
        <div className="collaborateDiv">
            <div className="collaborateSection1">
                <h1>Collaborate with us</h1>
                <div className="buttonRow">
                    <div className="button-light" onClick={scrollTo1}>Industry</div>
                    <div className="button-light" onClick={scrollTo2}>Academia</div>
                    <div className="button-light" onClick={scrollTo3}>Student</div>
                </div>
                <img src={il1} className="il1" alt="Illustration" />
            </div>
            <div className="collaborateSection2">
                <img src={il2} className="il2" alt="Illustration" />
                <div className="collaborateEach right" ref={ref1}>
                    <h1>Industry</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
                <div className="collaborateEach right"  ref={ref2}>
                    <h1>Academia</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
                <div className="collaborateEach right"  ref={ref3}>
                    <h1>Student</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Collaborate
