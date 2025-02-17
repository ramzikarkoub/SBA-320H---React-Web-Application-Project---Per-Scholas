import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import { createContext, Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={"/products/category/:category"} element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
