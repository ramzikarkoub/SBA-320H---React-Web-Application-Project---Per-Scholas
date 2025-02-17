import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Categories() {
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
      <h2 className="categories-title">Categories:</h2>
      <ul>
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
  );
}
