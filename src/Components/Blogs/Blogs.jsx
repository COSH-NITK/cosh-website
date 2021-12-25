import './Blogs.scss';

import React from 'react'

import il1 from '../../Assets/il_blogs1.svg';

function Blogs() {
    return (
        <div className="blogsDiv">
            <div className="blogsSection1">
                <img src={il1} className="il1" alt="Illustration" />
                <h1>Blog</h1>
            </div>
            <div className="blogsSection2">

            </div>
        </div>
    )
}

export default Blogs
