const axios = require('axios');

async function exibeCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const { logradouro, bairro, localidade, uf } = response.data;
    console.log(`Endereço: ${logradouro}, ${bairro}, ${localidade} - ${uf}`);
  } catch (error) {
    console.error('Erro ao exibir os dados do CEP:', error);
  }
}

// Exibir os dados do CEP da FATEC ZL (03694-000)
exibeCep('03694-000');