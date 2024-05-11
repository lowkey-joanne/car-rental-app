import { useContext } from 'react';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <header>
        <p className='logo'>Blog</p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  )
}

export default NavBar;