import { NavLink } from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <header>
        <p className='logo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQ2FbmsokMlmV4k09l30rbsXA8fvyiySJHg&usqp=CAU" alt="" /></p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  )
}

export default NavBar;
