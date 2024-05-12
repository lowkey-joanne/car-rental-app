import React from 'react';
import CarList from "../components/CarList"

const Home = ({ cars }) => { 
  return (
    <div className='page-container'>
        <h1>car rental</h1>
        <CarList cars={cars} /> 
    </div>
  )
}

export default Home;
