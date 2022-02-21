import React, {useState, useEffect} from 'react'

import {Helmet} from "react-helmet";

import './Blogs.scss';
import BlogsList from '../../Components/BlogsList/BlogsList';
import il1 from '../../Assets/il_blogs2.svg';

function Blogs() {
    useEffect(() => window.scrollTo(0, 0), []);
    
    return (
        <div className="blogsDiv">
            <Helmet>
                <title>COSH Blog</title>
            </Helmet>
            <div className="blogsSection1Container">
                <div className="blogsSection1">
                    <img src={il1} className="il1" alt="Illustration" />
                    <h1>Blog</h1>
                </div>
            </div>
            <div className="blogsSection2">
                <BlogsList search={true} />
            </div>
        </div>
    )
}

export default Blogs
