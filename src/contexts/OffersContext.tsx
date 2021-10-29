import { createContext, ReactNode, useEffect, useRef, useState } from "react";

interface OffersContextData {
  endereco: Endereco;
  handleGetCep: () => void;
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
      return console.log(endereco)
    }
    initialRender.current = false;
  }, [endereco]);

  function handleGetCep() {
    let cep= '03282000';
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json()
        .then((json) => {
          setEndereco(json);          
        }))
      .catch((err) => console.log(err.message));
  }

  return (
    <OffersContext.Provider value={{
      endereco,
      handleGetCep
      }}>
      { children }
    </OffersContext.Provider>
  )
}