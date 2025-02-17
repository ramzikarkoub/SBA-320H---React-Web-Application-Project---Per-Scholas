import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

export default function Categories({ category }) {
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

  return (
    <div className="categories">
      <div className="category-header">
        <h2 className="categories-title">
          {category
            ? category
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "All Products"}
        </h2>
        <ul>
          <li>
            <Link to={"/"}>
              <button className={` ${!category ? "btn-category" : ""}`}>
                All
              </button>
            </Link>
          </li>
          {categories.map((cat, index) => (
            <li key={index}>
              <Link to={`/products/category/${cat}`}>
                <button className={`${cat === category ? "btn-category" : ""}`}>
                  {cat}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
