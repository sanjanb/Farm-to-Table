// models/Transaction.js

const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  amountPaid: { type: Number, required: true },
  datePaid: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
