// routes/productRoutes.js

const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

// Add a new product
router.post("/", addProduct);

// Get all products
router.get("/", getProducts);

// Get product by ID
router.get("/:id", getProductById);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
