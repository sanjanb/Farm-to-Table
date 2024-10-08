// src/pages/FarmerAddProduct.js

import React, { useState } from "react";
import axios from "axios";

const FarmerAddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantityAvailable: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product added successfully!");
      window.location.href = "/farmer/dashboard";
    } catch (error) {
      console.error(error);
      alert("Error adding product!");
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="quantityAvailable"
          placeholder="Quantity Available"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FarmerAddProduct;
