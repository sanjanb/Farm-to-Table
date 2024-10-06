// routes/transactionRoutes.js

const express = require("express");
const {
  createTransaction,
  getTransactionsByFarmerId,
} = require("../controllers/transactionController");
const router = express.Router();

// Create a new transaction
router.post("/", createTransaction);

// Get transactions by farmer ID
router.get("/:farmerId", getTransactionsByFarmerId);

module.exports = router;
