function cepAPI(cep: string) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.blob())
}

export default cepAPI;