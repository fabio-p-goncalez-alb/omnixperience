import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import CepModal from "../components/CepModal";

interface OffersContextData {
  endereco: Endereco;
  handleGetCep: (cep:string) => void;
  handleSetModal: () => void;
}

interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
}

interface OffersProviderProps {
  children: ReactNode;
}

export const OffersContext = createContext({} as OffersContextData);

export function OffersProvider({ children }: OffersProviderProps) {
  const [isModal, setIsModal] = useState(false);
  const [isCep, setIsCep] = useState(false);
  const  [endereco, setEndereco] = useState<Endereco>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: 0,
    gia: 0,
    ddd: 0,
    siafi: 0
  });

  const initialRender = useRef(true);

  useEffect(()=>{
    if (!initialRender.current) {
      setIsCep(true);
      handleSetModal()
      return console.log(endereco);
    }
    initialRender.current = false;
  }, [endereco]);

  function handleSetModal() {
    setIsModal(!isModal);
  }

  function handleGetCep(cep:string) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json()
        .then((json) => {
          setEndereco(json);          
        }))
      .catch((err) => {
        setIsCep(false);
        throw err.message
      });
  }

  return (
    <OffersContext.Provider value={{
      endereco,
      handleGetCep,
      handleSetModal
      }}>
      { children }

      { isModal && <CepModal />}
      { !isCep}
    </OffersContext.Provider>
  )
}