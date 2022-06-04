import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
  </Routes>
);

export default App;
