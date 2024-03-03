import "../styles/App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
