import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/offers">Ofertas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar;