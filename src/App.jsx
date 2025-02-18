import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import { CartProvider } from "./assets/CartContext";
import Product from "./pages/product/Product";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={"/products/category/:category"} element={<Category />} />
        <Route path={"/products/:id"} element={<Product />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
