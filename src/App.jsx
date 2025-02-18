import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import { CartProvider } from "./assets/CartContext";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={"/products/category/:category"} element={<Category />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
