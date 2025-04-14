function filterByFilterKey(organisation, filter, values) {
  if (filter === "technology" || filter === "year" || filter === "categories") {
    const boolFilters = values.some(
      (value) =>
        organisation[filter]?.includes(value.toLowerCase()) ||
        organisation[filter]?.includes(value.toUpperCase()) ||
        organisation[filter]?.includes(value)
    );
    return boolFilters;
  }
  return values.includes(organisation[filter]);
}

export default filterByFilterKey;
