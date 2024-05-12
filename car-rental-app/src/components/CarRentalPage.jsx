import React, { useState, useEffect } from 'react';
import CarList from './CarList';
import CarDetails from './CarDetail';
import NavBar from './NavBar';
import SortBar from './SortBar';
import RentalForm from './RentalForm';

function CarRentalPage() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showRentalForm, setShowRentalForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleHire = (car) => {
    setSelectedCar(car);
    setShowRentalForm(true);
  };

  const handleBack = () => {
    setSelectedCar(null);
    setShowRentalForm(false); 
  };

  return (
    <div>
      <h1>CAR RENTAL</h1>
      <NavBar />
      <SortBar />
      {selectedCar && !showRentalForm && ( 
        <button className='BTC' onClick={handleBack}>Back to Cars</button>
      )}
      {!selectedCar && !showRentalForm ? ( 
        <CarList cars={cars} onCarSelect={handleCarSelect} />
      ) : (
        <div>
          {showRentalForm ? (
            <RentalForm car={selectedCar} onCancel={handleBack} /> 
          ) : (
            <CarDetails car={selectedCar} onHire={handleHire} />
          )}
        </div>
      )}
    </div>
  );
}

export default CarRentalPage;
