const { mongoose, Schema } = require("mongoose");

const BookSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
