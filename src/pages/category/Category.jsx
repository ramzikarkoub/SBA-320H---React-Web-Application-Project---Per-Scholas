import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import ProductsList from "../../components/productsList/ProductsList";
import axios from "axios";

export default function Category() {
  const { category } = useParams();
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
