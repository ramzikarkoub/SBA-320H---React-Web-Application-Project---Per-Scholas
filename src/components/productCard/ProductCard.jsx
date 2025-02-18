import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { CartContext } from "../../assets/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <div className="product-rating">
        <span>Rating: {product.rating.rate} ★</span>
        <span>({product.rating.count} reviews)</span>
      </div>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
