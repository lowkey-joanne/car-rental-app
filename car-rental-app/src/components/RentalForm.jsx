import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RentalForm({ car }) {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [rentalStart, setRentalStart] = useState('');
  const [rentalEnd, setRentalEnd] = useState('');
  const [rentalDuration, setRentalDuration] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = new Date(rentalStart);
    const endDate = new Date(rentalEnd);
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); 
    const pricePerDay = parseFloat(car.price.replace(/[^\d.]/g, ''));
    const totalPrice = numberOfDays * pricePerDay; 

    setRentalDuration(numberOfDays);
    setTotalPrice(totalPrice);


    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Rental Agreement</h3>
        <label>Customer Name:
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </label>
        <label>Rental Start:
          <input type="date" value={rentalStart} onChange={(e) => setRentalStart(e.target.value)} />
        </label>
        <label>Rental End:
          <input type="date" value={rentalEnd} onChange={(e) => setRentalEnd(e.target.value)} />
        </label>
        <button type="submit">Submit Rental</button>
      </form>
      
      <div className="car-detail">
        <h2>Selected Car Details</h2>
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <p>{`Make: ${car.make}`}</p>
        <p>{`Model: ${car.model}`}</p>
        <p>{`Price: ${car.price}`}</p>
        <p>{`Rental Duration: ${rentalDuration} days`}</p>
        <p>{`Total Price: ${totalPrice}`}</p>
      </div>
    </div>
  );
}

export default RentalForm;
