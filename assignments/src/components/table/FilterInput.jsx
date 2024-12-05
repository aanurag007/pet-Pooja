import React from "react";

const FilterInput = ({ columnKey, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter..."
      className="filter-input"
      onChange={(e) => onFilterChange(columnKey, e.target.value)}
    />
  );
};

export default FilterInput;
