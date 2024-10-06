// models/Order.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the buyer who placed the order
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true }, // e.g., UPI, Bank Transfer
  status: { type: String, default: "Pending" }, // Order status
  transactionFee: { type: Number, required: true }, // 2.5% fee
  dateOrdered: { type: Date, default: Date.now },
  farmerContactDetails: {
    phoneNumber: { type: String },
    whatsappNumber: { type: String },
  },
});

module.exports = mongoose.model("Order", orderSchema);
