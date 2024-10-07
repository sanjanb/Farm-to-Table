// routes/orderRoutes.js

const express = require("express");
const {
  createOrder,
  getOrdersByBuyerId,
} = require("../controllers/orderController");
const router = express.Router();

// Create a new order
router.post("/", createOrder);

// Get orders by buyer ID
router.get("/:buyerId", getOrdersByBuyerId);

module.exports = router;
