// models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the farmer who added this product
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., Vegetables, Fruits, etc.
  quantityAvailable: { type: Number, required: true },
  imageUrl: { type: String }, // URL of the product image
  description: { type: String },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
