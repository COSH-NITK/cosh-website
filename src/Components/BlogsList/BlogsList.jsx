import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';
import Moment from 'moment';

import './BlogsList.scss'
import il_arrow from '../../Assets/il_arrow.svg';
import icon_article from '../../Assets/icon_article.svg';

function BlogsList({featured=false, except=''}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        var url = window.location.protocol + "//cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/?key=740bb3f520006dca9d07cdf0f5&include=tags";
        if(window.location.hostname==="localhost") url = "https://cosh.nitk.ac.in/ghost-blog/ghost/api/v4/content/posts/?key=740bb3f520006dca9d07cdf0f5&include=tags";

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(url);
            // console.log(result['posts']);
            setPosts(result['posts']);
            // res = result['posts'];
        })
        .catch(error => {
            console.log('error', error);
        });
        // console.log("posts", posts);
    }, [])
    // var posts = [];
    useEffect(() => {
        // console.log("posts2", posts);
        // if(posts.length > 0) console.log(posts[0]['tags']) ;
    }, [posts]);

    return (
        <div className="blogCardsDiv">
                    {
                        featured === true ?
                        posts.map((post, i)=>
                            post.featured ?
                            <BlogCard 
                                title={post.title} 
                                image={post.feature_image} 
                                desc={post.excerpt} 
                                time={post.reading_time}
                                published_at={post.published_at}
                                slug={post.slug}
                                id={post.id}
                                key={i}
                                tags={post.tags}
                            />
                            : null
                        )
                        : posts.map((post, i)=>
                        post.slug === except ? null :
                        <BlogCard 
                            title={post.title} 
                            image={post.feature_image} 
                            desc={post.excerpt} 
                            time={post.reading_time}
                            published_at={post.published_at}
                            slug={post.slug}
                            key={i}
                            id={post.id}
                            tags={post.tags}
                            />
                        )
                    }
                </div>
    )
}

function BlogCard({
    title="default title", 
    desc="", 
    time="99", 
    published_at='2022-01-08T15:15:31.000+00:00',
    slug = 'Article',
    id = '0',
    tags = [],
    image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    }) {
    if(desc.length>150){
        desc=desc.slice(0,150) + "...";
    }
    // console.log('tags ', tags);
    return (
        <Link to={`/blog/${slug}`} className="blogCardDiv">
            <div className="imgDiv" style={{ backgroundImage: `url("${image}")`  }}> </div>
            <div className="contentDiv">
                <div className="detailsDiv">
                    <p className="lable">{time} min read</p>
                    <p className="lable">{Moment(published_at).format('D MMM YYYY')}</p>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="blogCardFooterDiv">
                    <div className="left">
                        <img src={icon_article} className="il_arrow" alt="arrow" />
                        <p>{tags[0].name}</p>
                    </div>
                    <div className="right" id="rightHover">
                        <img src={il_arrow} className="il_arrow" alt="arrow" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogsList
