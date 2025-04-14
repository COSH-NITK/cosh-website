import './OrganisationCard.scss';
import filterByFilterKey from '../../Helper/filterByFilterKey';
import def_image from '../../Assets/default_image.svg'
import { Link } from 'react-router-dom';

/**
 * Renders an organisation card component.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.default_image] - The default image URL.
 * @param {Object} props.organisation - The organisation data.
 * @param {Object} props.filters - The filters to apply.
 * @returns {JSX.Element|null} The rendered organisation card component or null if it doesn't match the filters.
 */

export default function OrganisationCard({
    default_image = def_image,
    organisation,
    filters,
}) {
    /**
     * Checks if the organisation matches all the filters.
     *
     * @param {Object} filters - The filters to apply.
     * @returns {boolean} True if the organisation matches all the filters, false otherwise.
     */
    
    const matchesFilters = Object.entries(filters).every(([filter, values]) => {
        if (!values.length) return true;
        return filterByFilterKey(organisation, filter, values);
    });

    const slug = organisation.name.toLowerCase().replace(/ /g, '-');

    return (
        matchesFilters && (
            <Link to={`/organisations/${slug}`} className="organisation-card">
                <div className="organisation-card__image">
                    <img src={organisation.image || default_image} alt="Organisation Image" />
                </div>
                <div className="organisation-card__details">
                    <h3 className='org-name'>{organisation.name || 'Organisation Name'}</h3>
                    <p className='org-tag'>{organisation.categories[0]}</p>
                    <div className="tech-stack">
                        {organisation.technology && organisation.technology.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            </Link>
        ) 
    );
}
