// src/pages/FarmerDashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete product function
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Refresh the product list after deletion
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <Link to="/farmer/add-product">Add New Product</Link>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Your Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.quantityAvailable}
            <Link to={`/farmer/edit-product/${product._id}`}>Edit</Link>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerDashboard;
