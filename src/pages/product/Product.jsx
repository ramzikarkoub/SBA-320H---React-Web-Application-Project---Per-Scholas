import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";
import { CartContext } from "../../assets/CartContext";

export default function Product() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log("Fetched Product:", response.data);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="loading">Loading product...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!product) return <p className="error">Product not found.</p>;

  return (
    <div className="product-Container">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="rating">
          Rating: {product.rating.rate} ★ ({product.rating.count} reviews)
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
