import React from 'react';
import './SearchBar.scss';
import { ReactComponent as SearchIcon } from "../../Assets/search.svg"; 

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
    <input
      className="search-bar"
      type="text"
      placeholder="Search Organisations"
      value={value}
      onChange={onChange}
    />
    <SearchIcon className="search-icon" />
  </div>
  );
}

export default SearchBar;
