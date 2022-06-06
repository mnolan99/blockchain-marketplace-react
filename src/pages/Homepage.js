import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Header from "../functionComponents/Header";
import Footer from "../functionComponents/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1>Homepage</h1>

      <Footer />
      <Button
        className="login-btn"
        key="1"
        type="primary"
        onClick={() => navigate("/categories")}
      >
        <span>Categories</span>
      </Button>

      <Button
        className="login-btn"
        key="1"
        type="primary"
        onClick={() => navigate("/productDetails")}
      >
        <span>Product Details</span>
      </Button>
    </>
  );
};

export default Homepage;
