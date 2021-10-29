import { useContext, useState } from 'react';
import { OffersContext } from '../contexts/OffersContext';

import '../styles/components/cep-modal.css'

function CepModal() {
   const { handleGetCep } =useContext(OffersContext);
  const [cep, setCep] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleGetCep(cep);
  };

  return (
  <div className="cep-modal-overlay">
      <div className="cep-modal-container">
        <header>Informe Seu Cep</header>

        <form onSubmit={handleSubmit}>
          <label htmlFor='inptutCep'>CEP :</label>
          <input name='inputCep' type="text" value={cep}
          onChange={e => setCep(e.target.value)}/>
          <button type="submit"> Confirmar </button>
        </form>
      </div>
    </div>
  );
}

export default CepModal;