import React, { useState, useEffect } from 'react';
import CarList from './CarList';
import CarDetails from './CarDetail';
import SortBar from './SortBar';
import RentalForm from './RentalForm';
import NavBar from './NavBar';

function CarRentalPage() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [filters, setFilters] = useState({ make: '', model: '', transmission: '', price: '' });

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

  const handleSort = () => {
    let filteredCars = [...cars];
      if (filters.make) {
      filteredCars = filteredCars.filter(car => car.make === filters.make);
    }
    if (filters.model) {
      filteredCars = filteredCars.filter(car => car.model === filters.model);
    }
    if (filters.transmission) {
      filteredCars = filteredCars.filter(car => car.transmission === filters.transmission);
    }
    if (filters.price) {
      if (filters.price === 'Below KSH 5,000') {
        filteredCars = filteredCars.filter(car => parseFloat(car.price.replace(/[^\d.]/g, '')) < 5000);
      } else if (filters.price === 'KSH 5,000 - KSH 10,000') {
        filteredCars = filteredCars.filter(car => {
          const price = parseFloat(car.price.replace(/[^\d.]/g, ''));
          return price >= 5000 && price < 10000;
        });
      } else if (filters.price === 'Above KSH 10,000') {
        filteredCars = filteredCars.filter(car => parseFloat(car.price.replace(/[^\d.]/g, '')) >= 10000);
      }
    }
  
    setCars(filteredCars);
  };
  
  return (
    <div>
      <h1>CAR RENTAL WEBSITE</h1>
      <NavBar />
      <SortBar setCars={setCars} setFilters={setFilters} handleSort={handleSort} />
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
