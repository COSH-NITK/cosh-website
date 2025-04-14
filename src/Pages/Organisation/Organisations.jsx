import React, { useState, useEffect} from 'react';
import OrganisationsList from '../../Components/OrganisationsList/OrganisationsList';
import { Helmet } from "react-helmet";
import './Organisations.scss'
import il_orgs from '../../Assets/il_orgs.svg';
import FilterSidebar from '../../Components/FilterSidebar/FilterSidebar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { BsChevronDoubleRight, BsChevronDoubleDown } from "react-icons/bs";
import getOpenSourceData from "../../Helper/getOpenSourceData"
import Loading from '../../Components/Loading/Loading';

// Initial filters state
const initialFilters = {
  categories: [],
  technology: [],
  year: [],
  program: [],
};

function Organisations() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [organisations, setOrganisations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState({});
  
  useEffect(() => {
    window.scrollTo(0, 0);

    getOpenSourceData().then(
        (res)=>{
            const oss_details = res[0]
            setOrganisations(oss_details.organisations)
            setFilterData(oss_details.tech_filters)
            setLoading(false);
        }
    )
}, []); 

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

  const filteredOrganisations = organisations.length > 0 && organisations.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (loading ? <Loading/> :
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
          <button className="filter-button" onClick={toggleFilterSidebar}> {showFilterSidebar ? (
              <BsChevronDoubleDown />
            ) : (
              <BsChevronDoubleRight />
            )}</button>
        </div>
        <div className={` ${showFilterSidebar ? 'show' : 'organisationsFilterSection'}`}>
          <FilterSidebar initialFilters={initialFilters} data={filterData} onFilterChange={handleFilterChange} />
        </div>
       
{organisations.length > 0 ? (
  <div className={`organisationsListSection ${showFilterSidebar && "hide"}`}>
    <SearchBar value={searchTerm} onChange={handleSearchChange} placeholderText={"Organisations"}/>
    <OrganisationsList organisations={filteredOrganisations} filters={filters} />
  </div>
) : (
  <div>Loading...</div>
)}

      </div>
    </div>
  )
}

export default Organisations;
