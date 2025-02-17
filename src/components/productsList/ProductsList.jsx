import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import "./ProductsList.css";

export default function ProductsList({ FilteredProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  return (
    <div className="product-list">
      {(FilteredProduct || products).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
