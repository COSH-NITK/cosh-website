import React, { useEffect } from 'react'

import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom'

import './Blogs.scss';
import BlogsList from '../../Components/BlogsList/BlogsList';
import il1 from '../../Assets/il_blogs2.svg';

function Blogs() {
    
    const location = useLocation()
    // console.log(location);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <BlogsList search={true} category={location.state!=null ? location.state.category : null} />
            </div>
        </div>
    )
}

export default Blogs
