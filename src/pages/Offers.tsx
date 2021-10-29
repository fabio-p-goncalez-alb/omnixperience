import { useContext } from 'react';
import CepButton from '../components/CepButton';
import { OffersContext } from '../contexts/OffersContext';
import '../styles/pages/offers.css';

function Offers() {
  const { handleSetModal, isCep } = useContext(OffersContext);
  return (
    <main id="page-offers">

      Ofertas
      <section>
        <CepButton />
      </section>
    </main>
  )
}

export default Offers;