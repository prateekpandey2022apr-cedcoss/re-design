import logo from "./logo.svg";
import "./App.css";
import { ShopProvider } from "./ShopContext";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Checkout from "./Checkout";
import Success from "./Success";

function App() {
  return (
    <>
      <ShopProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </ShopProvider>
    </>
  );
}

export default App;
