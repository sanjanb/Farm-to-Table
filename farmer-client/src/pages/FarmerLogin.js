// src/pages/FarmerLogin.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate replaces useHistory

const FarmerLogin = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate(); // Replaces useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      // Save the token to local storage (or session storage) for authentication
      localStorage.setItem("token", response.data.token);
      navigate("/farmer/dashboard"); // Use navigate instead of history.push
    } catch (error) {
      console.error(error);
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Farmer Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FarmerLogin;
