import "../styles/App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Cart from "../pages/Cart.jsx";
import Error from "../pages/Error.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/Shopping-Cart/" element={<Home />} />
        <Route
          path="/Shopping-Cart/shop"
          element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/Shopping-Cart/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
