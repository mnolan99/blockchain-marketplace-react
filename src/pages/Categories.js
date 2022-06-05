import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Categories</h1>
      <Button
        className=""
        key="1"
        type="primary"
        onClick={() => navigate("/Homepage")}
      >
        <span>Homepage</span>
      </Button>
    </>
  );
};

export default Categories;
