// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, required: true }, // 'farmer' or 'buyer'
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  whatsappNumber: { type: String },
  address: { type: String },
  PAN: { type: String },
  password: { type: String, required: true },
  bankDetails: {
    accountNumber: { type: String },
    IFSC: { type: String },
  },
  landSize: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("User", userSchema);
