import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';
import Moment from 'moment';
import Select from 'react-select';
import {BiSad} from 'react-icons/bi';

import './BlogsList.scss'
import il_arrow from '../../Assets/il_arrow.svg';
import icon_article from '../../Assets/icon_article.svg';

function BlogsList({featured=false, except='', search=false, category=null}) {

    const [posts, setPosts] = useState([]);
    const [validPosts, setValidPosts] = useState([]);
    const [query, setQuery] = useState("");
    const [options, setOptions] = useState([
        { value: 'All posts', label: 'All posts' }
    ]);
    const [selectedCategory, setSelectedCategory] = useState('');

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
            if(except !== '') result['posts'] = result['posts'].filter((post) => post.slug !== except);
            setPosts(result['posts']);
        })
        .catch(error => {
            console.log('error', error);
        });
        if(category) setSelectedCategory(category);
    }, [except]);
    
    useEffect(() => {
        setOptions(
            [
                { value: 'All posts', label: 'All posts' },
                // { value: 'test', label: 'test' },
            ...posts
            .map(post=> {
                return { value: post.tags[0].name, label: post.tags[0].name }
            })
            .filter((v,i,a)=>a.findIndex(v2=>(v2.value===v.value))===i)
                ]
            );
    }, [posts]);
    useEffect(() => {
        setValidPosts(posts
        .filter(post => {
            if (query === "") {
                //if query is empty
                return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return post;
            }
        })
        .filter(post => {
            if (selectedCategory === "" || selectedCategory ==='All posts') {
                return post;
            } else if (post.tags && post.tags[0].name === selectedCategory) {
                console.log('match');
                return post;
            }
        })
        .map((post, i)=>
            featured === false || post.featured === true ?
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
        ));
        // console.log('running2', posts);
    }, [options, query, selectedCategory]);

    // useEffect(() => {console.log(options)}, [options]);

    return (
        <>
            {
                search == false ? null :
                <div className="searchbarDiv">
                    <div className="searchBarRow">
                        <input 
                        className="inputField"
                        type="text" 
                        value={query} 
                        onChange={(e)=>setQuery(e.target.value)} 
                        placeholder="Search for a blog"
                        maxlength="30"
                        />

                        <Select
                            className="inputField"
                            onChange={(r)=>setSelectedCategory(r.value)}
                            options={options}
                            placeholder="Select category"
                            />
                    </div>
                
                    <p className={`${query.length>0 || (selectedCategory.length>0 && selectedCategory!== 'All posts') ? 'show' : 'hide'}`} >
                        {
                            query.length > 0 && selectedCategory.length === 0
                            ? `Showing results for: "${query}"` :
                            query.length > 0 
                            ?`Showing results for: "${query}" (${selectedCategory})`
                            : `Showing results for category: (${selectedCategory})`
                        }
                    </p>
                </div>
            }
                        {
                            validPosts.length === 0
                            ? 
                            <div className="noResultDiv">
                                <p>No posts found</p>
                                <BiSad size='20' />
                            </div>
                            : 
                            <div className="blogCardsDiv">
                                {validPosts}
                            </div>
                        }
                    
                    </>
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
                        <p>{tags.length>0 ? tags[0].name: null}</p>
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
