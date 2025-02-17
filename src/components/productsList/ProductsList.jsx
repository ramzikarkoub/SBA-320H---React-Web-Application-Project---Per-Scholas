import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import "./ProductsList.css";

export default function ProductsList({ FilteredProduct }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  console.log(cart);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-list">
      {FilteredProduct
        ? FilteredProduct.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />
          ))
        : products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />
          ))}
    </div>
  );
}
