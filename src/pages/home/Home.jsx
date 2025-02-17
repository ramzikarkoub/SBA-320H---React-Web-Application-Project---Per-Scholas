import React from "react";
import ProductsList from "../../components/productsList/ProductsList";
import "./home.css";
import Categories from "../../components/categories/Categories";

export default function Home() {
  return (
    <div className="main-container">
      <Categories />
      <ProductsList />
    </div>
  );
}
