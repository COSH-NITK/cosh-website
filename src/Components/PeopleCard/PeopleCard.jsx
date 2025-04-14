import "./PeopleCard.scss";
import filterByFilterKey from "../../Helper/filterByFilterKey";
import def_image from "../../Assets/default_image.svg";

/**
 * Renders an people card component.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.default_image] - The default image URL.
 * @param {Object} props.people - The people data.
 * @param {Object} props.filters - The filters to apply.
 * @returns {JSX.Element|null} The rendered people card component or null if it doesn't match the filters.
 */

export default function PeopleCard({
  default_image = def_image,
  people,
  filters,
}) {
  /**
   * Checks if the people matches all the filters.
   *
   * @param {Object} filters - The filters to apply.
   * @returns {boolean} True if the people matches all the filters, false otherwise.
   */
  const matchesFilters = Object.entries(filters).every(([filter, values]) => {
    if (!values.length) return true;
    return filterByFilterKey(people, filter, values);
  });

  const degree = people.degree_details;
  const degreeText = `${degree.admission_year}-${(degree.admission_year + degree.duration_in_years)%100} (${degree.degree_name}, Major: ${degree.major}${degree.minor ? `, Minor: ${degree.minor}` : ""})`;


  return (
    matchesFilters && (
      <div className="people-card">
        <div className="people-card__image">
          <img src={people.image || default_image} alt="" />
        </div>
        <div className="people-card__details">
          <h3 className="people-name">{people.name}</h3>
          <p className="people-degree">{degreeText}</p>
          <p className="people-tag">{people.categories}</p>
          <div className="year-list">
            {people.year.map((year, index) => (
              <p key={index}>{year}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
