import { useContext } from 'react';
import { OffersContext } from '../contexts/OffersContext';

import '../styles/components/cep-button.css';

function CepButton() {
  const { handleSetModal, isCep} = useContext(OffersContext);
  return (    
    <div className="cep-button-container">
      <button className={!isCep ? 'active' : 'inactive'} onClick={handleSetModal}>
        Ops, errei meu cep!
      </button>
    </div>
  );
}

export default CepButton;