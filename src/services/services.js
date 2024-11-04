const { model } = require("mongoose");
const BookModel = require("../models/book.model");

const addBookService = async (req, res) => {
  const book = req.body;
  try {
    const newBook = new BookModel(book);

    await newBook.save();

    return { message: "Libro generado satisfactoriamente", statusCode: 201 };
  } catch (error) {
    return { message: "Ocurrió un error", statusCode: 400 };
  }
};

const readAllBookService = async (req, res) => {
  const allBooks = await BookModel.find(req);

  return allBooks;
};

const getBookByIdService = async (req, res) => {
  const { id } = req.params;

  const bookById = await BookModel.findById(id);

  if (!bookById) {
    return { message: "Libro no encontrado", statusCode: 404 };
  }

  return bookById;
};

const updateBookService = async (req, res) => {
  const { id } = req.params;
  const carToEdit = req.body;

  try {
    const bookById = await BookModel.findById(id);

    if (!bookById) {
      return { message: "Libro no encontrado", statusCode: 404 };
    }

    bookById.name = carToEdit.name;
    bookById.price = carToEdit.price;
    bookById.description = carToEdit.description;

    await bookById.save();

    return { message: "Libro actualizado con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error", statusCode: 400 };
  }
};

const deleteBookService = async (req, res) => {
  const { id } = req.params;

  try {
    const bookToDelete = await BookModel.deleteOne({ _id: id });

    if (bookToDelete.deletedCount === 0) {
      return { message: "Libro no encontrado", statusCode: 404 };
    }
    return { message: "Libro eliminado con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error", statusCode: 400 };
  }
};

module.exports = {
  addBookService,
  readAllBookService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
};
