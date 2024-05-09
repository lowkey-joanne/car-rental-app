import React, { useState } from 'react';

function HireForm() {
  const [customerName, setCustomerName] = useState('');
  const [carId, setCarId] = useState('');
  const [rentalStart, setRentalStart] = useState('');
  const [rentalEnd, setRentalEnd] = useState('');
  const [rentals, setRentals] = useState([]); // Local state to store rental data

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRental = { customerName, carId, rentalStart, rentalEnd };

    // Save the new rental in local state
    setRentals((prevRentals) => [...prevRentals, newRental]);

    // Clear form inputs after submission
    setCustomerName('');
    setCarId('');
    setRentalStart('');
    setRentalEnd('');

    // Log data or show a message
    console.log('Rental submitted successfully:', newRental);
    alert('Rental submitted successfully!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Customer Name:
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </label>
        <label>Car ID:
          <input type="number" value={carId} onChange={(e) => setCarId(e.target.value)} />
        </label>
        <label>Rental Start:
          <input type="date" value={rentalStart} onChange={(e) => setRentalStart(e.target.value)} />
        </label>
        <label>Rental End:
          <input type="date" value={rentalEnd} onChange={(e) => setRentalEnd(e.target.value)} />
        </label>
        <button type="submit">Submit Rental</button>
      </form>
      
      <h2>Current Rentals</h2>
      <ul>
        {rentals.map((rental, index) => (
          <li key={index}>
            {`Customer: ${rental.customerName}, Car ID: ${rental.carId}, Start: ${rental.rentalStart}, End: ${rental.rentalEnd}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HireForm;
