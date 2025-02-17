import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/productsList/ProductsList";
// import Categories from "../../components/categories/Categories";
import "./Category.css";
import Categories from "../../components/categories/Categories";

export default function Category() {
  const { category } = useParams(); // Extracts the category from the URL
  const [categoryToDisplay, setCategoryToDisplay] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setCategoryToDisplay(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, [category]);

  return (
    <div className="product-list">
      <div className="category-header">
        <Categories category={category} />
      </div>
      <div className="category-products">
        <ProductsList FilteredProduct={categoryToDisplay} />
      </div>
    </div>
  );
}
