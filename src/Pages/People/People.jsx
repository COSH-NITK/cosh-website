import React, { useState } from "react";
import PeopleList from "../../Components/PeopleList/PeopleList";
import { Helmet } from "react-helmet";
import "./People.scss";
import il_people1 from "../../Assets/il_people1.svg";
import il_people2 from "../../Assets/il_people2.svg";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BsChevronDoubleRight, BsChevronDoubleDown } from "react-icons/bs";

// Initial filters state
const initialFilters = {
  categories: [],
  technology: [],
  year: [],
  program: [],
};

// Data for filters
const data = {
  categories: [
    "Open Source",
    "Web Development",
    "Mobile Development",
    "Healthcare",
    "Spatial Computing",
    "Mathematics",
    "Package Management",
    "Environmental Science",
    "Women in Computing",
  ],
  technology: [
    "React",
    "Angular",
    "Vue",
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "Node.js",
    "Ruby",
    "Shell",
  ],
  year: ["2020", "2021", "2022"],
  program: ["GSOC", "Outreachy", "Season of Docs"],
};

// People data
const peopleData = [
  {
    id: 1,
    name: "Steve Morin",
    categories: "End-user applications",
    technology: ["React", "C++", "Python", "C"],
    year: ["2022"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...",
      },
    ],
  },
  {
    id: 2,
    name: "Steve Morin",
    categories: "API Development",
    technology: ["API", "Javascript", "Node.js"],
    year: ["2021"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 3,
    name: "Steve Morin",
    categories: "Healthcare",
    technology: ["Java", "React", "MySQL"],
    year: ["2020"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 4,
    name: "Steve Morin",
    categories: "Spatial Computing",
    technology: ["Python", "C++", "HTML/CSS"],
    year: ["2022"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 5,
    name: "Steve Morin",
    categories: "Mathematics",
    technology: ["Python", "C"],
    year: ["2021"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 6,
    name: "Steve Morin",
    categories: "Open Tech Development",
    technology: ["Python", "JavaScript", "Angular"],
    year: ["2020"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 1",
      },
    ],
  },
  {
    id: 7,
    name: "Steve Morin",
    categories: "Package Management",
    technology: ["Ruby", "Shell"],
    year: ["2022"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 8,
    name: "Steve Morin",
    categories: "Environmental Science",
    technology: ["JavaScript", "React", "Python"],
    year: ["2021"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
  {
    id: 9,
    name: "Steve Morin",
    categories: "Women in Computing",
    technology: ["Python", "Java", "C++"],
    year: ["2020"],
    projects: [
      {
        id: 1,
        title: "Title 1",
        desc: "Description 1",
      },
      {
        id: 2,
        title: "Title 2",
        desc: "Description 2",
      },
    ],
  },
];

function People() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState("");
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

  // Filter people based on search term
  const filteredPeople = peopleData.filter((people) =>
    people.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="peopleDiv">
      <Helmet>
        <title>People</title>
      </Helmet>

      {/* Common component for illustrations can be made*/}
      <div className="peopleSection1Container">
        {/* position of below 2 images has to fixed */}
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
            data={data}
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
