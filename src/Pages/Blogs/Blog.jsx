import React, {useState, useEffect} from 'react'

import {useParams} from "react-router-dom";
import Moment from 'moment';
import {LinkedinShareButton} from "react-share";
import {TwitterShareButton} from "react-share";
import {FacebookShareButton} from "react-share";
import {Link} from 'react-router-dom';
import {FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";

import './Blog.scss'
import BlogsList from '../../Components/BlogsList/BlogsList';
import avatar from '../../Components/FacultyCards/avatar1.svg';

function Blog() {

    let { slug } = useParams();
    const [post, setPost] = useState({});
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => {
        window.scrollTo(0, 0);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        var url = window.location.protocol + `//cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/slug/${slug}/?key=740bb3f520006dca9d07cdf0f5&include=tags&include=authors`;
        if(window.location.hostname==="localhost") url = `https://cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/slug/${slug}/?key=740bb3f520006dca9d07cdf0f5&include=tags&include=authors`;

          fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(url);
                // console.log(result['posts']);
                setPost(result['posts'][0]);
                // res = result['posts'];
            })
            .catch(error => {
                console.log('error', error);
            });
        // console.log("posts", posts);
    }, [slug])
    // var posts = [];
    // useEffect(() => {
    //     console.log("post2", post);
    // }, [post]);

    return (
        <div className="blogDiv">
            <div className="blogContent">
                <div className="tagsRow">
                    {
                        !post.tags 
                        ? null 
                        : post.tags.map((tag, i)=>(
                            <Link 
                            to={'/blog'} 
                            state={{ category: tag.name}}
                            key={i}>
                                {tag.name}
                            </Link>
                        ))
                    }
                </div>
                <h1 className="title">{post.title}</h1>
                <div className="borderRow">
                    <div className="left"></div>
                    <div className="right">
                        <p className="desc">{post.excerpt}</p>
                        <div className="authorDiv">
                            <div className="imgDiv" style={{ backgroundImage: `url(${post.primary_author && post.primary_author.profile_image ? post.primary_author.profile_image : avatar})`}}>
                            </div>
                            <div className="right">
                                <h3>{post.primary_author ? post.primary_author.name : null}</h3>
                                <p>{Moment(post.published_at).format('D MMM YYYY')} • {post.reading_time} min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={post.feature_image} alt="" />
                <div className="body" dangerouslySetInnerHTML={{ __html: post.html }}></div>

                <div className="blogShareDiv">
                <LinkedinShareButton 
                url={"https://cosh.nitk.ac.in/"+window.location.pathname}
                quote={post.title}
                hashtag="#camperstribe"
                >
                 <FaLinkedin size={36} />
              </LinkedinShareButton>
            <FacebookShareButton 
                url={"https://cosh.nitk.ac.in/"+window.location.pathname}
                quote={post.title}
                hashtag="#camperstribe"
                >
                 <FaFacebookSquare size={36} />
              </FacebookShareButton>
            <TwitterShareButton 
                url={"https://cosh.nitk.ac.in"+window.location.pathname}
                quote={post.title}
                hashtag="#camperstribe"
                >
                 <FaTwitterSquare size={36} />
              </TwitterShareButton>
                </div>
            </div>

            <div className="otherBlogsSection">
                <h1>Other Blogs</h1>
                <BlogsList except={post.slug} />
            </div>
            <svg viewBox="0 0 1065 30" fill="none" xmlns="http://www.w3.org/2000/svg">
             <motion.path 
             d="M0 15H1065" 
             stroke="#1AF5BC" 
             stroke-width="10"
             style={{
                pathLength,
                rotate: 180,
                translateX: 0,
                translateY: 5,
                scaleX: -1 // Reverse direction of line animation
            }}
             />
            </svg>


            {/* <svg 
            width="1065" 
            height="30" 
            viewBox="0 0 1065 30" 
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15H1065" stroke="#1AF5BC" stroke-width="29"/>
            </svg> */}

        </div>
    )
}

export default Blog
