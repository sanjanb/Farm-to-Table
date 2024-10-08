// src/routes.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Routes replaces Switch
import HomePage from "./pages/HomePage";
import FarmerRegistration from "./pages/FarmerRegistration";
import BuyerRegistration from "./pages/BuyerRegistration";
import FarmerLogin from "./pages/FarmerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import FarmerDashboard from "./pages/FarmerDashboard";
import FarmerAddProduct from "./pages/FarmerAddProduct";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Replaces Switch */}
        <Route path="/" element={<HomePage />} />
        <Route path="/farmer/register" element={<FarmerRegistration />} />
        <Route path="/buyer/register" element={<BuyerRegistration />} />
        <Route path="/farmer/login" element={<FarmerLogin />} />
        <Route path="/buyer/login" element={<BuyerLogin />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/add-product" element={<FarmerAddProduct />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
