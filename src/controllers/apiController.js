const { getExchangeRate } = require('../services/apiExchangeRate');

const convertPriceController = async (req, res) => {
    try {
        const { price } = req.query;
        if (!price || isNaN(price)) {
            return res.status(400).json({ error: 'Precio inválido' });
        }
        const usdRate = await getExchangeRate();
        const convertedPrice = price * usdRate;
        res.json({ priceInARS: price, priceInUSD: convertedPrice });
    } catch (error) {
        console.error('Error al convertir el precio:', error);
        res.status(500).json({ error: 'Error al convertir el precio' });
    }
};

module.exports = {
    convertPriceController
};
