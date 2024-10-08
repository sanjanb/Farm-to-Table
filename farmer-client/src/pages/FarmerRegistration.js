// src/pages/FarmerRegistration.js

import React, { useState } from "react";
import axios from "axios";

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    role: "farmer",
    name: "",
    phoneNumber: "",
    whatsappNumber: "",
    address: "",
    PAN: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      alert("Registration successful!");
      console.log(response.data); // You might want to redirect or clear the form here
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="PAN"
          placeholder="PAN"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FarmerRegistration;
