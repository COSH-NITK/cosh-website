import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {FiSearch} from 'react-icons/fi'
import {RiPagesLine} from 'react-icons/ri'
import {MdOutlineEvent} from 'react-icons/md'
import {MdOutlineContactPage} from 'react-icons/md'
import {CgSearchLoading} from 'react-icons/cg'

import './SearchBox.scss';
import searchPages from '../../Constants/searchPages';

function SearchBox({setSearchOpen}) {
    const [searchText, setSearchText] = useState("");
    const [filteredSearchPages, setFilteredSearchPages] = useState(searchPages);
    useEffect(() => {
        // console.log(searchText);

        setFilteredSearchPages(searchPages
            .filter(
                page => searchText==="" || 
                page.title.toLowerCase().search(searchText.toLowerCase())!==-1 || 
                (page.type && page.type.toLowerCase().search(searchText.toLowerCase())!==-1) ||
                (page.tags && 
                    page.tags.findIndex(element => element.toLocaleLowerCase().includes(searchText.toLowerCase())) !== -1
                    ) 
                ))
    }, [searchText]);
  return (
    <>
        <div className="SearchBackground" onClick={()=>{setSearchOpen(false);}}></div>
        <div className="SearchBoxDiv">
            <header className="searchbar">
                <form action="javascript:void(0)">
                    <label>
                    <FiSearch />
                    </label>
                    <input placeholder="Search..." value={searchText} onChange={(o)=>setSearchText(o.target.value)}></input>
                    <span onClick={()=>setSearchOpen(false)}>esc</span>
                </form>
            </header>
            <div className="searchResult">
                {
                    filteredSearchPages.length > 0 ?
                        filteredSearchPages.map(page => <SearchItem {...page} />) : 
                        <NoResults/>
                }
            </div>
        </div>
    </>
  )

  function SearchItem({title, url, type='Page', tags, goto=1}) {
    if(searchText!=='') {
        title = title.split(new RegExp(searchText, 'i')).join('<span>'+searchText+'</span>');
        type = type.split(new RegExp(searchText, 'i')).join('<span>'+searchText+'</span>');
        if(tags) {
            var new_tags = [];
            tags.forEach(element => new_tags.push(element.split(new RegExp(searchText, 'i')).join('<span>'+searchText+'</span>')));
        }
        tags = new_tags;
    }
    return (
      <Link to={url} state={{ goto: goto }} onClick={()=>setSearchOpen(false)} className="searchItemDiv">
          <div className="itemIcon">
            {
                type && type === 'Event' ? 
                <MdOutlineEvent/> : 
                type && type === 'Blog' ? 
                <MdOutlineContactPage/> : 
                <RiPagesLine/>
            }
          </div>
          <div className="itemMain" dangerouslySetInnerHTML={{__html: title}}>
          </div>
          {
            tags && tags.map(e => {
                return <div className="itemTag" dangerouslySetInnerHTML={{__html: e}}>
                </div>
            })
          }
          <div className="itemTag" dangerouslySetInnerHTML={{__html: type}}>
          </div>
      </Link>
    )
  }

  function NoResults() {
    return (
      <div className="noResultsDiv">
          <CgSearchLoading size="60"/>
          <p>No results for "<strong>{searchText}</strong>"</p>
          <p class="desc">Try searching for:</p>
          <ul>
            <li>About page</li>
            <li>Postman classroom program</li>
            <li>Building the COSH website</li>
          </ul>
      </div>
    )
  }
}



export default SearchBox