function filterByFilterKey(organisation, filter, values) {
    if (filter === 'technology' || filter === 'year' || filter === 'categories') {
        return values.some((value) => organisation[filter].includes(value));
    }
    return values.includes(organisation[filter]);
}

export default filterByFilterKey;