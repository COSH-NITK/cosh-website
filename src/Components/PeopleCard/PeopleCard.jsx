import './PeopleCard.scss'
import filterByFilterKey from '../../Helper/filterByFilterKey';
import def_image from '../../Assets/default_image.svg'

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
    filters
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

    return (
        matchesFilters && (
            <div className="people-card">
                <div className="people-card__image">
                    <img src={people.image || default_image} alt="" />
                </div>
                <div className="people-card__details">
                    <h3 className='people-name'>{people.name}</h3>
                    <p className='people-tag'>{people.categories}</p>
                    <div>{people.year[0]}</div>
                </div>
            </div>
        ) 
    );
}
