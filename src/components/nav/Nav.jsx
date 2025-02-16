import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/cart/Cart";
import "./nav.css";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
