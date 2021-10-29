import {useContext} from 'react';
import { OffersContext } from '../contexts/OffersContext';

function Offers() {  
  const {handleSetModal} = useContext(OffersContext);
  return (    
      <div id="page-offers">    

      Ofertas
        <button type="button" onClick={handleSetModal}> teste </button>
      </div>
  )
}

export default Offers;