import React, { useContext, useEffect } from "react";
import { CartContext } from "../../assets/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  console.log(cart);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {/* <hr /> */}
      {cart?.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="buttons">
            <button
              className="delete-btn"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </button>
            <button className="delete-btn" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
