const {
  addBookService,
  readAllBookService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
} = require("../services/services");

const addBookController = (req, res) => {
  const newBook = addBookService(req);

  res.json(newBook);
};

const readAllBookController = async (_, res) => {
  const allBooks = await readAllBookService();

  res.json(allBooks);
};

const getBookByIdController = async (req, res) => {
  const bookById = await getBookByIdService(req);

  res.json(bookById);
};

const updateBookController = async (req, res) => {
  const bookToEdit = await updateBookService(req);

  res.json(bookToEdit);
};

const deleteBookController = async (req, res) => {
  const bookToDelete = await deleteBookService(req);

  res.json(bookToDelete);
};

module.exports = {
  addBookController,
  readAllBookController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
};
