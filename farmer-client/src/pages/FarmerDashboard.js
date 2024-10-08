// src/pages/FarmerDashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products added by the farmer
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching products!");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <button onClick={() => (window.location.href = "/farmer/add-product")}>
        Add Product
      </button>
      <h3>Your Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.quantityAvailable}
            <button
              onClick={() =>
                (window.location.href = `/farmer/edit-product/${product._id}`)
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                (window.location.href = `/farmer/delete-product/${product._id}`)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerDashboard;
