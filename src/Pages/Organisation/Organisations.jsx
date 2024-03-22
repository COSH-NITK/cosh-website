import React, { useState } from 'react';
import OrganisationsList from '../../Components/OrganisationsList/OrganisationsList';
import { Helmet } from "react-helmet";
import './Organisations.scss'
import il_orgs from '../../Assets/il_orgs.svg';
import FilterSidebar from '../../Components/FilterSidebar/FilterSidebar';
import SearchBar from '../../Components/SearchBar/SearchBar';

// Initial filters state
const initialFilters = {
  categories: [],
  technology: [],
  year: [],
  program: [],
};

// Data for filters
const data = {
  categories: ['Open Source', 'Web Development', 'Mobile Development', 'Healthcare', 'Spatial Computing', 'Mathematics', 'Package Management', 'Environmental Science', 'Women in Computing'],
  technology: ['React', 'Angular', 'Vue', 'Python', 'C++', 'Java', 'JavaScript', 'Node.js', 'Ruby', 'Shell'],
  year: ['2020', '2021', '2022'],
  program: ['GSOC', 'Outreachy', 'Season of Docs'],
};


// Organisations data
const organisationsData = [
  {
    id: 1,
    name: 'Inkscape',
    categories: 'End-user applications',
    technology: ['React', 'C++', 'Python', 'C'],
    desc: 'Inkscape is a professional vector graphics editor for Windows, Mac OS X and Linux. It\'s free and open source.',
    year: ['2022']
  },
  {
    id: 2,
    name: 'Postman',
    categories: 'API Development',
    technology: ['API', 'Javascript', 'Node.js'],
    year: ['2021']
  },
  {
    id: 3,
    name: 'OpenMRS',
    categories: 'Healthcare',
    technology: ['Java', 'React', 'MySQL'],
    year: ['2020']
  },
  {
    id: 4,
    name: 'Liquid Galaxy',
    categories: 'Spatial Computing',
    technology: ['Python', 'C++', 'HTML/CSS'],
    year: ['2022']
  },
  {
    id: 5,
    name: 'SymPy',
    categories: 'Mathematics',
    technology: ['Python', 'C'],
    year: ['2021']
  },
  {
    id: 6,
    name: 'FOSSASIA',
    categories: 'Open Tech Development',
    technology: ['Python', 'JavaScript', 'Angular'],
    year: ['2020']
  },
  {
    id: 7,
    name: 'Homebrew',
    categories: 'Package Management',
    technology: ['Ruby', 'Shell'],
    year: ['2022']
  },
  {
    id: 8,
    name: 'Public Lab',
    categories: 'Environmental Science',
    technology: ['JavaScript', 'React', 'Python'],
    year: ['2021']
  },
  {
    id: 9,
    name: 'Systers',
    categories: 'Women in Computing',
    technology: ['Python', 'Java', 'C++'],
    year: ['2020']
  },
];


function Organisations() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  // Handle filter change
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: prevFilters[filterName].includes(value)
        ? prevFilters[filterName].filter((v) => v !== value)
        : [...prevFilters[filterName], value],
    }));
  };

  // Handle search change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle filter sidebar
  const toggleFilterSidebar = () => {
    setShowFilterSidebar(!showFilterSidebar);
  };

  // Filter organisations based on search term
  const filteredOrganisations = organisationsData.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="organisationsDiv">
      <Helmet>
        <title>Organisations</title>
      </Helmet>

      <div className="organisationsSection1Container">
        <img src={il_orgs} className="il_orgs" alt="OrgIllustration" />
        <div className="organisationsSection1">
          <h1>Organisations</h1>
        </div>
      </div>

      <div className="organisationSection2Container">
        <div className="filter-section">
          <button className="filter-button" onClick={toggleFilterSidebar}>Filters</button>
        </div>
        <div className={` ${showFilterSidebar ? 'show' : 'organisationsFilterSection'}`}>
          <FilterSidebar initialFilters={initialFilters} data={data} onFilterChange={handleFilterChange} />
        </div>
        <div className="organisationsListSection">
          <SearchBar value={searchTerm} onChange={handleSearchChange} placeholderText={"Organisations"}/>
          <OrganisationsList organisations={filteredOrganisations} filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default Organisations;
