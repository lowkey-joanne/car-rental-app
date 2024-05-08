import React from 'react';

function SortBar({ sortCriteria, setSortCriteria }) {
  const handleChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By: </label>
      <select id="sort" value={sortCriteria} onChange={handleChange}>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="price">Price</option>
        <option value="availability">Availability</option>
      </select>
    </div>
  );
}

export default SortBar;
