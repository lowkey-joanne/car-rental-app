import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faCog } from '@fortawesome/free-solid-svg-icons';

function CarDetails({ car, onHire }) {
  const hireCar = () => {
    onHire(car);
  };
  
  return (
    <div className="car-detail">
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <h2>{car.make} {car.model}</h2>
      <p>Category: {car.category}</p>
      <p><FontAwesomeIcon icon={faChair} /> {car.seater}</p>
      <p><FontAwesomeIcon icon={faCog} /> {car.transmission}</p>
      <p>Description: {car.description}</p>
      <p>Price: {car.price}</p>
      <button onClick={hireCar}>Hire</button>
    </div>
  );
}

export default CarDetails;