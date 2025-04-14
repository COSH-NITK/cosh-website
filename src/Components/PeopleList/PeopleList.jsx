import React from "react";
import "./PeopleList.scss";
import PeopleCard from "../PeopleCard/PeopleCard";
import def_image from "../../Assets/default_people.svg";
import filterByFilterKey from "../../Helper/filterByFilterKey";
import { useState } from "react";
import PeopleModal from "../PeopleModal/PeopleModal";

/**
 * Component for displaying a list of people based on filters.
 * @param {Object} props - The component props.
 * @param {Array} props.people - The list of people to display.
 * @param {string} props.default_image - The default image URL.
 * @param {Object} props.filters - The filters to apply on the people.
 * @returns {JSX.Element} - The rendered component.
 */

function PeopleList({ people, default_image = def_image, filters }) {
  //storing details for people modal
  const [details, setDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Filter the people based on the provided filters
  const filteredPeople = people.filter((people) => {
    return Object.entries(filters).every(([filter, values]) => {
      if (!values.length) return true;
      return filterByFilterKey(people, filter, values);
    });
  });

  // If no matching people found, display a message
  if (filteredPeople.length === 0) {
    return <div className="no-match">No data found</div>;
  }

  // Render the list of people
  return (
    <>
      <div className="people-list">
        {filteredPeople.map((people) => (
          <div
            key={people.id}
            onClick={() => {
              setDetails(people);
              setShowModal(true);
            }}
          >
            {/* common component for cards can be made */}
            <PeopleCard
              default_image={default_image}
              people={people}
              filters={filters}
            />
          </div>
        ))}
      </div>
      <PeopleModal
        details={details}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default PeopleList;
