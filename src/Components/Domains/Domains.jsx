import './Domains.scss'

import React, {useState, useEffect} from 'react'

import il_plus from '../../Assets/il_plus.svg';
import il_minus from '../../Assets/il_minus.svg';

function Domains() {

    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [active]);

    const domains = ['Artificial Intelligence', 'Systems', 'Networking', 'Development', 'Blockchain', 'Robotics', 'Electric Vehicles', 'Game Development', 'Security' ];

    return (
        <div className="domainsDiv">
            <div className="left">
                { domains.map(
                    (d, i)=> <h3 className={`${active===i+1 ? "active" : ""}`} key={i} onClick={() => setActive(i+1)}>{d}</h3>
                ) }
                
                {/* <h3 className={`${active===2 ? "active" : ""}`} onClick={() => setActive(2)}>Systems</h3>
                <h3 className={`${active===3 ? "active" : ""}`} onClick={() => setActive(3)}>Networking</h3>
                <h3 className={`${active===4 ? "active" : ""}`} onClick={() => setActive(4)}>Development</h3>
                <h3 className={`${active===5 ? "active" : ""}`} onClick={() => setActive(5)}>Blockchain</h3>
                <h3 className={`${active===6 ? "active" : ""}`} onClick={() => setActive(6)}>Robotics</h3>
                <h3 className={`${active===7 ? "active" : ""}`} onClick={() => setActive(7)}>Electric Vehicles</h3>
                <h3 className={`${active===8 ? "active" : ""}`} onClick={() => setActive(8)}>Game Development</h3>
                <h3 className={`${active===9 ? "active" : ""}`} onClick={() => setActive(9)}>Security</h3> */}
            </div>
            <div className="right">
                <h1>{domains[active-1]}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="projectsDiv">
                    <h2>Projects</h2>
                    <div className="expandableBar" onClick={()=>open === 1 ? setOpen(0) : setOpen(1)}>
                        <button>Ongoing Projects</button>
                        <img src={open===1 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===1 ? "show" : "hide"}`}>
                        this is content
                    </div>
                    <div className="expandableBar" onClick={()=>open === 2 ? setOpen(0) : setOpen(2)}>
                        <button>Past Projects</button>
                        <img src={open===2 ? il_minus : il_plus} className="il_plus" alt="Illustration" />
                    </div>  
                    <div className={`content ${open===2 ? "show" : "hide"}`}>
                        this is content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domains
