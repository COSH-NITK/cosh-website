import React, { useState } from 'react';
import './FilterSidebar.scss';

const FilterSidebar = ({ initialFilters, data, onFilterChange }) => {
    const [filters, setFilters] = useState(initialFilters);

    const handleFilterChange = (filterName, itemName) => {
        // Update the filters state with the new filter value
        const updatedFilters = {
            ...filters,
            [filterName]: {
                ...filters[filterName],
                [itemName]: !filters[filterName][itemName],
            },
        };
        setFilters(updatedFilters);
        // Call the onFilterChange callback with the updated filter values
        onFilterChange(filterName, itemName);
    };

    return (
        <div className="filter-sidebar">
            <h2 className="filter-sidebar__title">Filters</h2>
            <div className="filter-sidebar__section">
                {Object.keys(filters).map((filterName) => (
                    <div className="filter-sidebar__option" key={filterName}>
                        <h4 className="filter-sidebar__option-title">
                            {/* Capitalize the filter name */}
                            {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                        </h4>
                        <ul className="filter-sidebar__option-list">
                            {data[filterName].map((item) => (
                                <li className="filter-sidebar__option-item" key={item}>
                                    <input
                                        className="filter-sidebar__option-checkbox"
                                        type="checkbox"
                                        checked={filters[filterName][item]}
                                        onChange={() => handleFilterChange(filterName, item)}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
