import React from 'react'
import {Link} from 'react-router-dom'

import {FiSearch} from 'react-icons/fi'
import {RiPagesLine} from 'react-icons/ri'

import './SearchBox.scss';

function SearchBox({setSearchOpen}) {
  return (
    <>
        <div className="SearchBackground" onClick={()=>{setSearchOpen(false);}}></div>
        <div className="SearchBoxDiv">
            <header className="searchbar">
                <form>
                    <label>
                    <FiSearch />
                    </label>
                    <input placeholder="Search..."></input>
                </form>
            </header>
            <div className="searchResult">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </div>
        </div>
    </>
  )
}

function SearchItem() {
  return (
    <Link to={''} className="searchItemDiv">
        <div className="itemIcon">
            <RiPagesLine/>
        </div>
        <div className="itemMain">
            Page name
        </div>
        <div className="itemTag">
            Page
        </div>
    </Link>
  )
}


export default SearchBox