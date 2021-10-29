import React from 'react';
import { OffersProvider } from './contexts/OffersContext';
import Routes from './routes';
import './styles/global.css';
import './styles/reset.css';


function App() {
  return (  
    <OffersProvider>  
      <Routes />
    </OffersProvider>    
  );
}

export default App;
