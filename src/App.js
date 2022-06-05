import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="categories" element={<Categories />} />
    <Route path="ProductDetails" element={<ProductDetails />} />
    <Route path="Homepage" element={<Homepage />} />
  </Routes>
);

export default App;
