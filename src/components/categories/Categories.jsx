import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Categories({ category }) {
  const [categories, setCategories] = useState([]);
  const selectedCategory = useParams().category;
  //   console.log(category);
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
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/products/category/${category}`}>
                <button
                  className={` ${
                    category === selectedCategory ? "btn-category" : ""
                  }`}
                >
                  {category}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
