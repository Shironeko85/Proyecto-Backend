const express = require("express");
const {
  addBookController,
  readAllBookController,
  getBookByIdController,
  updateBookController,
  deleteBookController
} = require("../controllers/controller");


const router = express.Router();

router.get("/", (_, response) => {
  response.send("Libracos baratitos");
});

router.post("/books", addBookController);
router.get("/books", readAllBookController);
router.get('/books/:id', getBookByIdController)
router.put('/books/:id', updateBookController)
router.delete('/books/:id', deleteBookController)

module.exports = router;
