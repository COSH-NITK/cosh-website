import React from 'react'
import './Home.scss'

import Illustration1 from '../../Assets/il1.svg';
import Illustration2 from '../../Assets/il2.svg';

function Home() {
    return (
        <div className="homeDiv">
            <div className="homeSection1">
                <h1>Center for <br />Open-Source Software and Hardware NITK</h1>
                <p>A center dedicated to open-source software and hardware at the National Insitiute of Technology Karnataka Surathkal</p>
                <h3>Collaborate with us:</h3>
                <div className="row">
                    <div className="button-light">Industry</div>
                    <div className="button-light">Academia</div>
                    <div className="button-light">Students</div>
                    <img src={Illustration1} className="il1" alt="Illustration 1" />
                </div>
            </div>
            <div className="homeSection2">
                <h1 className="sectionHeader">
                    About us
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                <div className="button-dark">More about us</div>
                <img src={Illustration2} className="il2" alt="Illustration 2" />
            </div>
        </div>
    )
}

export default Home
