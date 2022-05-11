import React, { useRef, useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './Collaborate.scss'
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
    // console.log(location);

    useEffect(() => {
        if(location.state!=null){
            const { goto } = location.state
            // console.log("goto: "+goto);
            if(goto === 1) {
                // console.log("section 1");
                setTimeout(() => {scrollTo1();}, 500);
                
            }
            if(goto === 2) {
                // console.log("section 2");
                setTimeout(() => {scrollTo2();}, 500);
            }
            if(goto === 3) {
                // console.log("section 3");
                setTimeout(() => {scrollTo3();}, 500);
            }
        }
      }, []);

    

    return (
        <div className="collaborateDiv">
            <Helmet>
                <title>Collaborate with us</title>
            </Helmet>
            <div className="collaborateSection1Container">
                <div className="collaborateSection1">
                    <h1>Collaborate with us</h1>
                    <div className="buttonRow">
                        <div className="button-light" onClick={scrollTo1}>Industry</div>
                        <div className="button-light" onClick={scrollTo2}>Academia</div>
                        <div className="button-light" onClick={scrollTo3}>Students</div>
                    </div>
                    <img src={il1} className="il1" alt="Illustration" />
                </div>
            </div>
            <div className="collaborateSection2 justify">
                <img src={il2} className="il2" alt="Illustration" />
                <div className="collaborateEach right firstChild" ref={ref1}>
                    <h1>Industry</h1>
                    <p>COSH NITK has been involved in developing some of the most exciting open-source solutions. Several industries have been actively collaborating with COSH NITK to convert their ideas into proof-of-concept prototypes and subsequently scale them up to the production environment. COSH NITK team has vast experience in working on industry-funded projects that leverage open-source tools and technologies. Some of these projects have been deployed at the production scale in the respective industries and are actively used and maintained.</p>
                    <p>The open-source ecosystem established by COSH at NITK can be leveraged by the industries to explore innovative new solutions and create new markets for open-source technologies. Industries can network with some of the young and brightest minds at NITK and recruit them. Besides, industries can contribute to and significantly influence the education and R&D processes, and foster the adoption of open-source systems.</p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
                <div className="collaborateEach right"  ref={ref2}>
                    <h1>Academia</h1>
                    <p>The widespread adoption of open-source technologies has fostered trust and greater transparency about processes that are adopted to build large-scale systems. Besides tools and technologies, determining the right set of applications, developing a knowledge base, and building the technical capacity are crucial to accelerating the adoption of open-source systems. The surge in the adoption of open-source systems provides strong evidence that investing time and efforts in them will help build cost-effective, efficient, smart, scalable, and fool-proof solutions to some of the most challenging problems in building and maintaining systems.</p>
                    <p>The amalgamation of open-source technologies into teaching, learning, and research can significantly enhance the quality of future open-source contributors. COSH NITK is open to collaborating with academic institutions and universities to perform joint research and development in the domain of open-source technologies and disseminate the outcomes via reproducible results, paper publications, and technical reports. This provides an opportunity for academic institutions and universities to be a part of the larger community that builds robust and reliable open-source systems. Besides, COSH NITK is open to collaborating with academic institutions and universities that are interested to work together on industry/community-funded open-source projects.</p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
                <div className="collaborateEach right"  ref={ref3}>
                    <h1>Students</h1>
                    <p>Getting early exposure to open-source tools and technologies can make a significant impact in shaping the future of students. Although there are several means by which the students can learn about open-source tools, technologies, competitions, internships, and other opportunities, the most prominent question that students have is: “How should I start working on open-source projects?”. COSH NITK precisely resolves this concern by following a formal approach of onboarding students to open-source domains and providing the necessary guidance, support, and infrastructure. There is a special emphasis on educating the students about the significance of working on open-source projects and making contributions.</p>
                    <p>COSH NITK regularly organizes events, including training programs, that help the students to get started with open-source tools and technologies. This process is established with an aim to onboard new student contributors to the world of open-source, and eventually, convert them into long-term open-source contributors and experts. Students will gain an industry-like exposure to working in a large collaborative environment on long-term projects that are destined for production scale.</p>
                    <Link to="/contact" className="button-dark">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Collaborate
