import './Blog.scss'

import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";

import Moment from 'moment';
import BlogsList from './BlogsList'

function Blog() {

    let { slug } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        var url = window.location.protocol + `//cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/slug/${slug}/?key=740bb3f520006dca9d07cdf0f5&include=tags&include=authors`;
        if(window.location.hostname=="localhost") url = `http://cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/slug/${slug}/?key=740bb3f520006dca9d07cdf0f5&include=tags&include=authors`;

          fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(url);
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
    useEffect(() => {
        // console.log("post2", post);
    }, [post]);

    var bg = 'https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

    return (
        <div className="blogDiv">
            <div className="blogContent">
                <div className="tagsRow">
                    {
                        post.tags ? post.tags.map((tag, i)=><p key={i}>{tag.name}</p>) : null
                    }
                </div>
                <h1 className="title">{post.title}</h1>
                <div className="borderRow">
                    <div className="left"></div>
                    <div className="right">
                        <p className="desc">{post.excerpt}</p>
                        <div className="authorDiv">
                            <div className="imgDiv" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"  }}>
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
            </div>
            <div className="otherBlogsSection">
                <h1>Other Blogs</h1>
                <BlogsList except={post.slug} />
            </div>
        </div>
    )
}

export default Blog
