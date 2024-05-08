import React from 'react';

function CarDetails({ car, onHire }) {
  const hireCar = () => {
    onHire(car);
  };
  

  return (
    <div className="car-details">
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <h2>{car.make} {car.model}</h2>
      <p>Category: {car.category}</p>
      <p>Seater: {car.seater}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Description: {car.description}</p>
      <p>Price: {car.price}</p>
      <button onClick={hireCar}>Hire</button>
    </div>
  );
}

export default CarDetails;
