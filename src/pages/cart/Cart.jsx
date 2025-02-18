import React, { useContext, useEffect } from "react";
import { CartContext } from "../../assets/CartContext";
import "./cart.css";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
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
        ))
      )}
    </div>
  );
}
