import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CarList from './CarList';
import CarDetails from './CarDetails';
import RentalForm from './RentalForm';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/cars/:carId" element={<CarDetails />} />
      <Route path="/rent" element={<RentalForm />} />
    </Routes>
  );
}

export default Routes;
