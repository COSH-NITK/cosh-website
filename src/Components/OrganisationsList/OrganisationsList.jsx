import React from 'react';
import './OrganisationsList.scss';
import OrganisationCard from '../OrgCard/OrganisationCard';
import def_image from '../../Assets/default_image.svg'
import filterByFilterKey from '../../Helper/filterByFilterKey';

/**
 * Component for displaying a list of organisations based on filters.
 * @param {Object} props - The component props.
 * @param {Array} props.organisations - The list of organisations to display.
 * @param {string} props.default_image - The default image URL.
 * @param {Object} props.filters - The filters to apply on the organisations.
 * @returns {JSX.Element} - The rendered component.
 */

function OrganisationsList({ organisations, default_image = def_image, filters }) {

    // Filter the organisations based on the provided filters
    const filteredOrganisations = organisations.filter((organisation) => {
        return Object.entries(filters).every(([filter, values]) => {
            if (!values.length) return true; 
            return filterByFilterKey(organisation, filter, values);
        });
    });

    // If no matching organisations found, display a message
    if (filteredOrganisations.length === 0) {
        return <div className="no-match">No organisation found</div>;
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
