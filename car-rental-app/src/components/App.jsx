import { Route, Routes } from "react-router-dom";
import Home from "../ pages/Home";
import NavBar from "./NavBar"
import CarDetails from "./CarDetails";
import CarList from "./CarList"
import React, { useEffect, useState } from "react";

const App = () => {
  const [car, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then (res => res.json())
      .then(data => setCars(data));
  },)

  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
