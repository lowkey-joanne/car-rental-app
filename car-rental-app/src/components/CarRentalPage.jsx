import React, { useState, useEffect } from 'react';
import CarList from './CarList';
import CarDetails from "components/CarDetails";

function CarRentalPage() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => setCars(data.cars))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleHire = (car) => {
    console.log('Hiring:', car.make, car.model);
  };

  const handleBack = () => {
    setSelectedCar(null);
  };

  return (
    <div>
      <h1>CAR RENTAL</h1>
      {selectedCar && (
        <button className='BTC' onClick={handleBack}>Back to Cars</button>
      )}
      {!selectedCar ? (
        <CarList cars={cars} onCarSelect={handleCarSelect} />
      ) : (
        <CarDetails car={selectedCar} onHire={handleHire} />
      )}
    </div>
  );
}

export default CarRentalPage;