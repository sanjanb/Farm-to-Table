// controllers/orderController.js

const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
  const { buyerId, products, totalAmount, paymentMethod, transactionFee } =
    req.body;

  try {
    const newOrder = new Order({
      buyerId,
      products,
      totalAmount,
      paymentMethod,
      transactionFee,
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get orders by buyer ID
exports.getOrdersByBuyerId = async (req, res) => {
  const { buyerId } = req.params;

  try {
    const orders = await Order.find({ buyerId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
