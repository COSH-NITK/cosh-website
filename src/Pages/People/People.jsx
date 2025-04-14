import React, { useEffect, useState } from "react";
import PeopleList from "../../Components/PeopleList/PeopleList";
import { Helmet } from "react-helmet";
import "./People.scss";
import il_people1 from "../../Assets/il_people1.svg";
import il_people2 from "../../Assets/il_people2.svg";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BsChevronDoubleRight, BsChevronDoubleDown } from "react-icons/bs";
import getOpenSourceData from "../../Helper/getOpenSourceData";
import Loading from "../../Components/Loading/Loading";

// Initial filters state
const initialFilters = {
  categories: [],
  technology: [],
  year: [],
  program: [],
};

function People() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [people, setPeople] = useState([]);
  const [loadingPeople, setLoadingPeople] = useState(true);
  const [filterData, setFilterData] = useState({});

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

  // Filter people based on search term
  const filteredPeople = people.filter((people) =>
    people.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    getOpenSourceData().then((res) => {
      const oss_details = res[0];
      setPeople(oss_details.people);
      setFilterData(oss_details.tech_filters);
      setLoadingPeople(false);
    });
  }, []);

  return loadingPeople ? (
    <Loading />
  ) : (
    <div className="peopleDiv">
      <Helmet>
        <title>People</title>
      </Helmet>

      {/* Common component for illustrations can be made*/}
      <div className="peopleSection1Container">
          <img
            src={il_people1}
            className="il_people1"
            alt="PeopleIllustration1"
          />
          <img
            src={il_people2}
            className="il_people2"
            alt="PeopleIllustration2"
          />
        <div className="peopleSection1">
          <h1>People</h1>
        </div>
      </div>

      <div className="peopleSection2Container">
        <div className="filter-section">
          <button className="filter-button" onClick={toggleFilterSidebar}>
            {showFilterSidebar ? (
              <BsChevronDoubleDown />
            ) : (
              <BsChevronDoubleRight />
            )}
          </button>
        </div>
        <div
          className={` ${showFilterSidebar ? "show" : "peopleFilterSection"}`}
        >
          <FilterSidebar
            initialFilters={initialFilters}
            data={filterData}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className={`peopleListSection ${showFilterSidebar && "hide"}`}>
          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            placeholderText={"People"}
          />
          <PeopleList people={filteredPeople} filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default People;
