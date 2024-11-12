const express = require("express");
const { check } = require("express-validator");
const {
  addBookController,
  readAllBookController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
} = require("../controllers/controller");
const checkBookTypes = require("../utils/checkBookTypes");
const handleValidationErrors = require("../utils/handleValidationErrors");
const { getBookWithConvertedPriceController } = require("../controllers/apiController");

const router = express.Router();

// Ruta base de prueba
router.get("/", (_, response) => {
  response.send("Libracos baratitos");
});

// Rutas CRUD con validaciones y middleware
router.post(
  "/books",
  [
    check("name", "Name is required and should be a string")
      .isString()
      .notEmpty(),
    check("price", "Price is required and should be a number").isNumeric(),
    check(
      "description",
      "Description is required and should be a string"
    ).isString(),
    checkBookTypes, // Middleware personalizado para verificar tipos
    handleValidationErrors, // Middleware para manejar errores de validación
  ],
  addBookController
);

router.get("/books", readAllBookController);

router.get(
  "/books/:id",
  [check("id", "Invalid book ID").isMongoId()],
  getBookByIdController
);

router.put(
  "/books/:id",
  [
    check("id", "Invalid book ID").isMongoId(),
    check("name").optional().isString(),
    check("price").optional().isNumeric(),
    check("description").optional().isString(),
    checkBookTypes, // Middleware para validar tipos en PUT
    handleValidationErrors, // Middleware para manejar errores de validación en PUT
  ],
  updateBookController
);

router.delete(
  "/books/:id",
  [check("id", "Invalid book ID").isMongoId()],
  deleteBookController,
  handleValidationErrors // Middleware para manejar errores de validación en DELETE
);

//Ruta para la API externa
router.get('/books/convert/:id', getBookWithConvertedPriceController);


module.exports = router;
