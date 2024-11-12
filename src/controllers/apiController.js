const { getBookByIdService } = require('../services/services');
const { getExchangeRate } = require('../services/apiExchangeRate');

const getBookWithConvertedPriceController = async (req, res) => {
    try {
        const { id } = req.params;
        const bookById = await getBookByIdService(id);
        if (!bookById) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        const usdRate = await getExchangeRate();
        const convertedPrice = bookById.price * usdRate;
        res.json({ 
            name: bookById.name,
            priceInARS: bookById.price,
            priceInUSD: convertedPrice,
            description: bookById.description,
        });
    } catch (error) {
        console.error('Error al obtener y convertir el precio del libro:', error);
        res.status(500).json({ error: 'Error al obtener y convertir el precio del libro' });
    }
};

module.exports = {
    getBookWithConvertedPriceController
};
