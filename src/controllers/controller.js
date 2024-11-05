const {
  addBookService,
  readAllBookService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
} = require("../services/services");

const addBookController = async (req, res) => {
  try {
    const newBook = await addBookService(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el libro", error });
  }
};

const readAllBookController = async (_, res) => {
  try {
    const allBooks = await readAllBookService();
    res.json(allBooks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los libros", error });
  }
};

const getBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const bookById = await getBookByIdService(id);
    if (!bookById) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(bookById);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el libro por ID", error });
  }
};

const updateBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await updateBookService(id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el libro", error });
  }
};

const deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBookService(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json({ message: "Libro eliminado correctamente", deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro", error });
  }
};

module.exports = {
  addBookController,
  readAllBookController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
};
