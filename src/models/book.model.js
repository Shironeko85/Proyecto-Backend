const {mongoose, Schema} = require('mongoose');

const BookSchema = Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel;