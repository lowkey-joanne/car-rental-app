import React from 'react';

function CarList({ cars, onCarSelect }) {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-card" onClick={() => onCarSelect(car)}>
          <img src={car.image} alt={`${car.make} ${car.model}`} />
          <div className="car-details">
            <h2>{car.make} {car.model}</h2>
            <p>Category: {car.category}</p>
            <p>{car.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;
