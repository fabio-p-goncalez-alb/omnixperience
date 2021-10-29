import {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {OffersContext} from '../contexts/OffersContext';

import '../styles/components/navigation-bar.css';

function NavigationBar() {
  const { handleSetModal } = useContext(OffersContext);
  return (
    <header className="page-header">
      <nav className='navbar'>
        <ul>
          <li className='nav-item'>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/offers" onClick={handleSetModal}>Ofertas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar;