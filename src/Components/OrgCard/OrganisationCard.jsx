import './OrganisationCard.scss'

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
    default_image = 'https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2FEvents%20images%2Fdefault-event-image.svg?alt=media&token=9756c350-dea2-42f4-a94d-00749c733968',
    organisation,
    filters
}) {
    /**
     * Checks if the organisation matches all the filters.
     *
     * @param {Object} filters - The filters to apply.
     * @returns {boolean} True if the organisation matches all the filters, false otherwise.
     */
    const matchesFilters = Object.entries(filters).every(([filter, values]) => {
        if (!values.length) return true;

        if (filter === 'technology') {
            return values.some((tech) => organisation.technology.includes(tech));
        }
        if (filter === 'year') {
            return values.some((year) => organisation.year.includes(year));
        }

        if (filter === 'categories') {
            return values.some((category) => organisation.categories.includes(category));
        }

        return values.includes(organisation[filter]);
    });

    return (
        matchesFilters && (
            <div className="organisation-card">
                <div className="organisation-card__image">
                    <img src={organisation.image || default_image} alt="Organisation Image" />
                </div>
                <div className="organisation-card__details">
                    <h3 className='org-name'>{organisation.name || 'Organisation Name'}</h3>
                    <p className='org-tag'>{organisation.categories || 'Tag Not Specified'}</p>
                    {/* <p className='org-desc'>{organisation.desc || 'No description'}</p> */}
                    <div className="tech-stack">
                        {organisation.technology && organisation.technology.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        ) 
    );
}
