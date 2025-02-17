import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { CartContext } from "../../assets/CartContext";

export default function Nav() {
  const { cart } = useContext(CartContext);
  console.log(cart);

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
