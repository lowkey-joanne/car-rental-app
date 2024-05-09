import React, { useState } from 'react';

function SortBar({ sortCriteria, setSortCriteria, filters, setFilters }) {
  const [seats, setSeats] = useState('');
  const [transmission, setTransmission] = useState('');

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleSeatsChange = (e) => {
    const selectedSeats = e.target.value;
    setSeats(selectedSeats);
    setFilters((prev) => ({ ...prev, seats: selectedSeats }));
  };

  const handleTransmissionChange = (e) => {
    const selectedTransmission = e.target.value;
    setTransmission(selectedTransmission);
    setFilters((prev) => ({ ...prev, transmission: selectedTransmission }));
  };

  return (
    <div>
      <label>Sort By: </label>
      <select value={sortCriteria} onChange={handleSortChange}>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="price">Price</option>
      </select>

      <label>Seats: </label>
      <select value={seats} onChange={handleSeatsChange}>
        <option value="">All</option>
        <option value="4">4 Seats</option>
        <option value="5">5 Seats</option>
        <option value="7">7 Seats</option>
      </select>

      <label>Transmission: </label>
      <select value={transmission} onChange={handleTransmissionChange}>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>
    </div>
  );
}

export default SortBar;
