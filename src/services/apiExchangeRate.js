const axios = require('axios');

const urlApi = 'https://api.exchangerate-api.com/v4/latest/ARS';

const getExchangeRate = async () => {
    try {
        const response = await axios.get(urlApi);
        return response.data.rates.USD;
    } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
        throw error;
    }
};

module.exports = {
    getExchangeRate,
};
