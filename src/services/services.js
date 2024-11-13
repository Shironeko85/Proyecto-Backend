const Book = require('../models/book.model');

const addBookService = async (book) => {
  try {
    const newBook = new Book(book);
    await newBook.save();
    return { message: "Libro generado satisfactoriamente", statusCode: 201 };
  } catch (error) {
    throw new Error('Ocurrió un error al agregar el libro');
  }
};

const readAllBookService = async () => {
  try {
    const allBooks = await Book.find();
    return allBooks;
  } catch (error) {
    throw new Error('Ocurrió un error al obtener los libros');
  }
};

const getBookByIdService = async (id) => {
  try {
    const bookById = await Book.findById(id);
    if (!bookById) {
      return { message: "Libro no encontrado", statusCode: 404 };
    }
    return bookById;
  } catch (error) {
    throw new Error('Ocurrió un error al obtener el libro por ID');
  }
};

const updateBookService = async (id, bookData) => {
  try {
    const bookById = await Book.findById(id);
    if (!bookById) {
      return { message: "Libro no encontrado", statusCode: 404 };
    }
    bookById.name = bookData.name;
    bookById.price = bookData.price;
    bookById.description = bookData.description;
    await bookById.save();
    return { message: "Libro actualizado con éxito", statusCode: 200 };
  } catch (error) {
    throw new Error('Ocurrió un error al actualizar el libro');
  }
};

const deleteBookService = async (id) => {
  try {
    const bookToDelete = await Book.deleteOne({ _id: id });
    if (bookToDelete.deletedCount === 0) {
      return { message: "Libro no encontrado", statusCode: 404 };
    }
    return { message: "Libro eliminado con éxito", statusCode: 200 };
  } catch (error) {
    throw new Error('Ocurrió un error al eliminar el libro');
  }
};

module.exports = {
  addBookService,
  readAllBookService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
};
