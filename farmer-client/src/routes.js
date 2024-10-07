// src/routes.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FarmerRegistration from "./pages/FarmerRegistration";
import BuyerRegistration from "./pages/BuyerRegistration";
import FarmerLogin from "./pages/FarmerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/farmer/register" component={FarmerRegistration} />
        <Route path="/buyer/register" component={BuyerRegistration} />
        <Route path="/farmer/login" component={FarmerLogin} />
        <Route path="/buyer/login" component={BuyerLogin} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
