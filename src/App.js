// Imports
import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

// Use react-router to link to multiple pages using one specified path
const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="categories" element={<Categories />} />
    <Route path="productDetails" element={<ProductDetails />} />
    <Route path="homepage" element={<Homepage />} />
  </Routes>
);

export default App;
