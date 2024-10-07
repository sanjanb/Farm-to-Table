// controllers/transactionController.js

const Transaction = require("../models/Transaction");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  const { farmerId, orderId, amountPaid } = req.body;

  try {
    const newTransaction = new Transaction({
      farmerId,
      orderId,
      amountPaid,
    });

    await newTransaction.save();
    res
      .status(201)
      .json({
        message: "Transaction created successfully",
        transaction: newTransaction,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get transactions by farmer ID
exports.getTransactionsByFarmerId = async (req, res) => {
  const { farmerId } = req.params;

  try {
    const transactions = await Transaction.find({ farmerId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
