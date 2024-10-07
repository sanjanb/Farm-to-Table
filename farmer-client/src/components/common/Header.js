// src/components/common/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/farmer/login">Farmer Login</Link>
          </li>
          <li>
            <Link to="/buyer/login">Buyer Login</Link>
          </li>
          <li>
            <Link to="/farmer/register">Farmer Register</Link>
          </li>
          <li>
            <Link to="/buyer/register">Buyer Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
