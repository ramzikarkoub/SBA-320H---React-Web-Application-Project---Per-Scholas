import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  console.log(products);

  return <div>ProductsList</div>;
}
