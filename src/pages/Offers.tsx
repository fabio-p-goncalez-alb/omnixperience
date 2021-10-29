import {useContext} from 'react';
import { OffersContext } from '../contexts/OffersContext';

function Offers() {  
  const { handleGetCep, endereco } = useContext(OffersContext);
  let cep = ''
  
  return (    
      <div id="page-offers">    

      Ofertas
        <button type="button" onClick={ handleGetCep }> teste </button>
      </div>
  )
}

export default Offers;