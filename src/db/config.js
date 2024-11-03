const { config } = require('dotenv');
const mongoose = require('mongoose');
require('dotenv'),config()

const DATABASE = process.env.DATABASE_URL || "";
(
    async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
    }
})()