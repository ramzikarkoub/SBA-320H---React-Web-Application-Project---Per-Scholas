import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  console.log(categories);

  return <div>Categories</div>;
}
