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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation (example for phone number and PAN)
  const validateForm = () => {
    const phonePattern = /^[0-9]{10}$/;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!phonePattern.test(formData.phoneNumber)) {
      setError("Invalid phone number. It should be 10 digits.");
      return false;
    }
    if (!panPattern.test(formData.PAN)) {
      setError("Invalid PAN format.");
      return false;
    }

    return true;
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      // Log or use the response data
      console.log("Registration successful:", response.data);

      setSuccess("Registration successful! Redirecting to login...");
      setFormData({
        role: "farmer",
        name: "",
        phoneNumber: "",
        whatsappNumber: "",
        address: "",
        PAN: "",
        password: "",
      });
      setTimeout(() => {
        window.location.href = "/farmer/login"; // Redirect to login after success
      }, 2000);
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
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
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="PAN"
          placeholder="PAN"
          value={formData.PAN}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default FarmerRegistration;
