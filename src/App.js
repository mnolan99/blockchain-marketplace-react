import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";


const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="categories" element={<Categories />} />
    <Route path="productDetails" element={<ProductDetails />} />
    <Route path="homepage" element={<Homepage />} />
  </Routes>
);

export default App;
