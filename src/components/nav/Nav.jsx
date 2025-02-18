import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { CartContext } from "../../assets/CartContext";

export default function Nav() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(itemsInCart);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({itemsInCart})</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
