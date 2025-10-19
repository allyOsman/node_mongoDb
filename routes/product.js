const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// POST: product/api/products
router.post("/api/products", createProduct);

// GET: product/api/products
router.get("/api/products", getProducts);

// GET: product/api/products/id
router.get("/api/products/:id", getProduct);

// PUT: product/api/products/id
router.put("/api/products/:id", updateProduct);

// DELETE: product/api/products/id
router.delete("/api/products/:id", deleteProduct);

module.exports = router;
