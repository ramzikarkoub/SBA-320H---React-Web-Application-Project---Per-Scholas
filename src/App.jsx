import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
