import React from 'react';

import {Link} from 'react-router-dom';

import './DomainCards.scss';

function DomainCards() {

    const domains = ['Artificial Intelligence', 'Blockchain', 'Development', 'Electric Vehicles', 'Game Development', 'Networking', 'Robotics', 'Security', 'Systems' ];
    const domains_public = ['Networking' ];

    // const domainIllustrations = [il_d1, il_d5, il_d4, il_d7, il_d8, il_d3, il_d6, il_d9, il_d2];


    return (
        <div className="domainsListDiv">
            {
                !domains_public.includes(domains[0]) ? null :
                <Link to="/domains" state={{ goto: 1 }}>
                    <div className="domainCard">
                        <div className="domainImg1">
                        <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <style>
                                    
                                </style> 
                                <rect width="294" height="294" fill="#501CBE"/>
                                <circle id="circle1" cx="64.4363" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle2" cx="92.1243" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle3" cx="119.812" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle4" cx="147.5" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle5" cx="175.188" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle6" cx="202.876" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle7" cx="230.564" cy="63.3344" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle8" cx="230.564" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle9" cx="230.564" cy="118.71" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle10" cx="230.564" cy="147" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle11" cx="230.564" cy="175.29" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle12" cx="230.564" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle13" cx="230.564" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle14" cx="202.876" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle15" cx="175.188" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle16" cx="147.5" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle17" cx="119.812" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle18" cx="92.1243" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle19" cx="64.4363" cy="230.666" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle20" cx="64.4363" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle21" cx="64.4363" cy="175.29" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle22" cx="64.4363" cy="147" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle23" cx="64.4363" cy="118.71" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle24" cx="64.4363" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle25" cx="92.1243" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle26" cx="92.1243" cy="118.71" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle27" cx="92.1243" cy="147" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle28" cx="92.1243" cy="175.29" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle29" cx="92.1243" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle30" cx="119.812" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle31" cx="147.5" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle32" cx="175.188" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle33" cx="202.876" cy="202.978" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle34" cx="202.876" cy="175.29" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle35" cx="202.876" cy="147" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle36" cx="202.876" cy="118.71" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle37" cx="202.876" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle38" cx="175.188" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle39" cx="147.5" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <circle id="circle40" cx="119.812" cy="91.0222" r="11.4363" fill="#101014" fill-opacity="0.2"/>
                                <path d="M175.605 174.503H121.802V120.701H156.906L175.605 138.88V174.503Z" stroke="#F0F3FD" stroke-width="10"/>
                            </svg>

                        </div>
                        <div className="domainTitleDiv">
                            <h3>{domains[0]}</h3>
                        </div>
                    </div>
                </Link>
            }
            {
                !domains_public.includes(domains[1]) ? null :
            <Link to="/domains" state={{ goto: 2}}>
                <div className="domainCard">
                    <div className="domainImg5">
                        <svg id="svg5" width="294" height="294" viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="bg" width="294" height="294" fill="#501CBE"/>
                            <rect x="90.1965" y="89.1965" width="114.607" height="114.607" stroke="#FFFFFF" stroke-width="8"/>
                            <rect id="box1" x="72" y="129.077" width="37.4273" height="37.4273" fill="#FFFFFF"/>
                            <rect id="box2" x="128.786" y="71" width="37.4273" height="37.4273" fill="#FFFFFF"/>
                            <rect id="box3" x="128.786" y="184.573" width="37.4273" height="37.4273" fill="#FFFFFF"/>
                            <rect id="box4" x="185.573" y="129.077" width="37.4273" height="37.4273" fill="#FFFFFF"/>
                        </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[1]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[2]) ? null :
            <Link to="/domains" state={{ goto: 3}}>
                <div className="domainCard">
                    <div className="domainImg4">
                    <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="294" height="294" fill="#501CBE"/>
                        <rect id="circle1" x="69" y="70.1304" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle5" x="69" y="110.826" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle9" x="69" y="152.652" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle2" x="110.826" y="70.1304" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle3" x="152.652" y="70.1304" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle6" x="110.826" y="110.826" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle8" x="194.478" y="110.826" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle11" x="152.652" y="152.652" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle12" x="194.478" y="152.652" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle14" x="110.826" y="193.348" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle15" x="152.652" y="193.348" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle16" x="194.478" y="193.348" width="30.5217" height="30.5217" fill="black" fill-opacity="0.3"/>
                        <rect id="circle13" x="69" y="193.348" width="30.5217" height="30.5217" fill="white"/>
                        <rect id="circle4" x="194.478" y="70.1304" width="30.5217" height="30.5217" fill="white"/>
                        <rect id="circle7" x="152.652" y="110.826" width="30.5217" height="30.5217" fill="white"/>
                        <rect id="circle10" x="110.826" y="152.652" width="30.5217" height="30.5217" fill="white"/>
                    </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[2]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[3]) ? null :
            <Link to="/domains" state={{ goto: 4}}>
                <div className="domainCard">
                    <div className="domainImg7">
                    <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        
                    </style>
                    <rect width="294" height="294" fill="#501CBE"/>
                    <rect x="99" y="81.8459" width="97" height="139.692" stroke="white" stroke-width="8"/>
                    <rect x="115" y="67" width="64" height="12" fill="white"/>
                    <rect id="box1" x="114.615" y="97.4614" width="64.6154" height="19.6154" fill="white"/>
                    <rect id="box2" x="114.615" y="127.461" width="64.6154" height="19.6154" fill="white"/>
                    <rect id="box3" x="114.615" y="156.308" width="64.6154" height="19.6154" fill="white"/>
                    <rect id="box4" x="114.615" y="186.308" width="64.6154" height="19.6154" fill="white"/>
                    <rect id="box5" x="114.615" y="216.308" width="64.6154" height="19.6154" fill="rgba(255,255,255,0)"/>
                </svg>
                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[3]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[4]) ? null :
            <Link to="/domains" state={{ goto: 5}}>
                <div className="domainCard">
                    <div className="domainImg8">
                    <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="294" height="294" fill="#501CBE"/>
                        <rect x="68" y="68" width="158" height="158" rx="76" fill="black" fill-opacity="0.2"/>
                        <rect id="square" x="91" y="91" width="112" height="112" fill="black" fill-opacity="0.2"/>
                        <path id="triangle" d="M147 92L202.426 203H91.5745L147 92Z" fill="white"/>
                    </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[4]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[5]) ? null :
            <Link to="/domains" state={{ goto: 6}}>
                <div className="domainCard">
                    <div className="domainImg3">
                    <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="294" height="294" fill="#501CBE"/>
                    <circle cx="147" cy="148.077" r="83.5" stroke="white"/>
                    <circle cx="147" cy="148.077" r="60.8846" stroke="white"/>
                    <circle cx="147" cy="148.077" r="39.3462" stroke="white"/>
                    <circle cx="147" cy="148.077" r="16.7308" stroke="white"/>
                    <circle id="circle1" cx="144.846" cy="65.1539" r="3.23077" fill="white"/>
                    <circle id="circle2" cx="92.077" cy="176.077" r="3.23077" fill="white"/>
                    <circle id="circle3" cx="111.461" cy="131.923" r="3.23077" fill="white"/>
                    <circle id="circle4" cx="200.846" cy="176.077" r="3.23077" fill="white"/>
                    <circle id="circle5" cx="186.846" cy="102.846" r="3.23077" fill="white"/>
                    <circle id="circle6" cx="162.077" cy="155.615" r="3.23077" fill="white"/>
                    <circle id="circle7" cx="95.3077" cy="213.769" r="3.23077" fill="white"/>
                </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[5]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[6]) ? null :
            <Link to="/domains" state={{ goto: 7}}>
                <div className="domainCard">
                    <div className="domainImg6">
                        <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="294" height="294" fill="#501CBE"/>
                            <rect id="rect1" x="55.1865" y="294" width="62.456" height="22.8497" transform="rotate(-90 55.1865 294)" fill="black" fill-opacity="0.3"/>
                            <rect id="rect2" x="102.409" y="184.321" width="62.456" height="22.8497" fill="black" fill-opacity="0.3"/>
                            <rect id="rect3" x="187.715" y="161.471" width="62.456" height="22.8497" transform="rotate(-90 187.715 161.471)" fill="black" fill-opacity="0.3"/>
                            <rect id="rect4" x="235" y="52" width="59" height="23" fill="black" fill-opacity="0.3"/>
                            <g id="circle1">
                                <circle cx="66.6114" cy="195.746" r="14.4715" fill="white"/>
                                <circle cx="66.6114" cy="195.746" r="22.6114" stroke="white" stroke-width="2"/>
                            </g>
                            <g id="circle2">
                                <circle class="circle2" cx="199.14" cy="195.746" r="14.4715" fill="white"/>
                                <circle class="circle2" cx="199.14" cy="195.746" r="22.6114" stroke="white" stroke-width="2"/>
                            </g>
                            <g id="circle3">
                                <circle cx="199.14" cy="63.2176" r="14.4715" fill="white"/>
                                <circle cx="199.14" cy="63.2176" r="22.6114" stroke="white" stroke-width="2"/>
                            </g>
                        </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[6]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[7]) ? null :
            <Link to="/domains" state={{ goto: 8}}>
                <div className="domainCard">
                    <div className="domainImg9">
                        <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <style>
                                
                            </style>
                            <rect width="294" height="294" fill="#501CBE"/>
                            <circle id="circle0" cx="43.5" cy="146.5" r="10.5" fill="rgba(255,255,255,0)"/>
                            <circle id="circle1" cx="69.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle2" cx="95.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle3" cx="121.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle4" cx="147.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle5" cx="173.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle6" cx="199.5" cy="146.5" r="10.5" fill="white"/>
                            <circle id="circle7" cx="225.5" cy="146.5" r="10.5" fill="white"/>
                            <rect x="40" y="123" width="214" height="48" stroke="black" stroke-opacity="0.2" stroke-width="8"/>
                        </svg>

                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[7]}</h3>
                    </div>
                </div>
            </Link>
            }
            {
                !domains_public.includes(domains[8]) ? null :
            <Link to="/domains" state={{ goto: 9}}>
                <div className="domainCard">
                    <div className="domainImg2">
                        <svg  viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="294" height="294" fill="#501CBE"/>
                            <rect x="57" y="56" width="181" height="181" fill="#101014" fill-opacity="0.1"/>
                            <rect x="75.7241" y="74.7241" width="143.552" height="143.552" fill="#101014" fill-opacity="0.1"/>
                            <rect x="93.2" y="92.2" width="108.6" height="108.6" fill="#101014" fill-opacity="0.1"/>
                            <circle id="circle1" cx="121.286" cy="116.541" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle2" cx="147.5" cy="116.541" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle3" cx="173.714" cy="116.541" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle4" cx="121.286" cy="142.755" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle5" cx="121.286" cy="168.969" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle cx="147.5" cy="142.755" r="10.6103" fill="#F0F3FD"/>
                            <circle id="circle6" cx="147.5" cy="168.969" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle7" cx="173.714" cy="142.755" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                            <circle id="circle8" cx="173.714" cy="168.969" r="10.6103" fill="#101014" fill-opacity="0.2"/>
                        </svg>
                    </div>
                    <div className="domainTitleDiv">
                        <h3>{domains[8]}</h3>
                    </div>
                </div>
            </Link>
            }
        </div>
    )
}

export default DomainCards
