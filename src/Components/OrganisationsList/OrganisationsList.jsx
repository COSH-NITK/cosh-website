import React from 'react';
import './OrganisationsList.scss';
import OrganisationCard from '../OrgCard/OrganisationCard';

/**
 * Component for displaying a list of organisations based on filters.
 * @param {Object} props - The component props.
 * @param {Array} props.organisations - The list of organisations to display.
 * @param {string} props.default_image - The default image URL.
 * @param {Object} props.filters - The filters to apply on the organisations.
 * @returns {JSX.Element} - The rendered component.
 */
function OrganisationsList({ organisations, default_image = 'https://firebasestorage.googleapis.com/v0/b/cosh-website.appspot.com/o/COSH%20website%20assets%2FEvents%20images%2Fdefault-event-image.svg?alt=media&token=9756c350-dea2-42f4-a94d-00749c733968', filters }) {
    // Filter the organisations based on the provided filters
    const filteredOrganisations = organisations.filter((organisation) => {
        return Object.entries(filters).every(([filter, values]) => {
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
    });

    // If no matching organisations found, display a message
    if (filteredOrganisations.length === 0) {
        return <div className="no-match">No match found</div>;
    }

    // Render the list of organisations
    return (
        <div className='organisation-list'>
            {filteredOrganisations.map((organisation) => (
                <OrganisationCard
                    key={organisation.id}
                    default_image={default_image}
                    organisation={organisation}
                    filters={filters}
                />
            ))}
        </div>
    );
}

export default OrganisationsList;
