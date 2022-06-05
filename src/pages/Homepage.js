import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Homepage</h1>

      <Button
        className=""
        key="1"
        type="primary"
        onClick={() => navigate("/Categories")}
      >
        <span>Categories</span>
      </Button>

      <Button
        className=""
        key="1"
        type="primary"
        onClick={() => navigate("/ProductDetails")}
      >
        <span>Product Details</span>
      </Button>
    </>
  );
};

export default Homepage;
