// src/pages/FarmerLogin.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FarmerLogin = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error message
    setLoading(true); // Start loading state

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Log the response for debugging
      console.log("Login response:", response.data);

      // Save the token to local storage for authentication
      localStorage.setItem("token", response.data.token);

      // Redirect to the farmer dashboard
      navigate("/farmer/dashboard");
    } catch (error) {
      // Check if error response exists and set appropriate error message
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
            "Login failed! Please check your credentials."
        );
      } else {
        setError("Login failed! Please check your connection.");
      }
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // End loading state
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
          value={formData.phoneNumber}
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FarmerLogin;
