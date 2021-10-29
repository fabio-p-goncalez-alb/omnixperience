import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation-bar.css';

function NavigationBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='nav-item'>
          <NavLink to="/home">Inicio</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/offers">Ofertas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar;