// Imports
import React from "react";
import { Rate } from "antd";
import "./ProductDetails.css";
import { useLocation } from "react-router";
import Footer from "../functionComponents/Footer";
import Header from "../functionComponents/Header";
import Purchase from "../functionComponents/Purchase";

const ProductDetails = () => {
  // Set the state of the product that the user clicked to view so that
  // correct product information can be displayed
  let { state: product } = useLocation();

  return (
    <>
      {/* Display the name, price, image and description of the specified product */}
      <div className="container">
        <Header />
        <div className="productDetails">
          <div>
            <div className="itemImg">
              <img src={product.image} alt="product" width="100%"></img>
            </div>
            <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
          </div>
          <div className="desc">
            <h1>{product.name}</h1>
            <Rate value={product.rating} disabled={true}></Rate>
            <p style={{ borderBottom: "1px solid #3f3f42" }}>
              Price:
              <span className="price"> ${product.price}</span>
            </p>
            <br />
            <p style={{ borderBottom: "1px solid #3f3f42" }}>
              No Additional Costs
            </p>
            <h3> About This Item</h3>
            <p>{product.about}</p>
          </div>

          {/* Display the box to allow a user to purchase the specific item. 
              Use the purchase component to display the information and button */}
          <div className="buyBox">
            <Purchase product={product} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
