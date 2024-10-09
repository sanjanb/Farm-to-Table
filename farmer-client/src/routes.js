// src/routes.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FarmerRegistration from "./pages/FarmerRegistration";
import BuyerRegistration from "./pages/BuyerRegistration";
import FarmerLogin from "./pages/FarmerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import FarmerDashboard from "./pages/FarmerDashboard";
import FarmerAddProduct from "./pages/FarmerAddProduct";
import FarmerEditProduct from "./pages/FarmerEditProduct"; // Import Edit Product page
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Farmer Routes */}
        <Route path="/farmer/register" element={<FarmerRegistration />} />
        <Route path="/farmer/login" element={<FarmerLogin />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/add-product" element={<FarmerAddProduct />} />
        <Route
          path="/farmer/edit-product/:id"
          element={<FarmerEditProduct />}
        />{" "}
        {/* Edit Product Route */}
        {/* Buyer Routes */}
        <Route path="/buyer/register" element={<BuyerRegistration />} />
        <Route path="/buyer/login" element={<BuyerLogin />} />
        {/* Handle 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
