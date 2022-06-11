// Imports
import "./Homepage.css";
import { Layout } from "antd";
import { React, useState } from "react";
import { useLocation } from "react-router";
import Header from "../functionComponents/Header";
import Footer from "../functionComponents/Footer";
import Rating from "../functionComponents/Rating";
import Results from "../functionComponents/Results";
import PriceFilter from "../functionComponents/PriceFilter";

// Some source code for ratings, filters, and results taken from
// https://github.com/IAmJaysWay/amazon-clone-full

const Categories = () => {
  // Deconstruct imports
  const { Sider, Content } = Layout;

  // Get state of selected category, rating, and
  // price filters so that the matching products can be displayed
  const { state: category } = useLocation();
  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);

  return (
    <>
      {/* Display header component */}
      <Header />
      <div className="cat-header">
        <span>Showing products for "</span>
        <span className="category">{category}"</span>
      </div>

      {/* Use antd layout to have sidebar and content side-by-side on the page */}
      <Layout>
        {/* Inline CSS to set style of sidebar */}
        <Sider
          width="300px"
          style={{
            padding: "25px",
            backgroundColor: "#fcfcfc",
            borderRight: "2px solid #3f3f42",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontFamily: "Montserrat",
            }}
          >
            Filter By
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Display Rating and PriceFilter components
                Getting the state of each filter to allow the user 
                to change the price and filter the products as required */}
            <Rating rating={rating} setRating={setRating} />
            <PriceFilter
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
            />
          </div>
        </Sider>

        {/* Inline CSS to set style of content */}
        <Content
          style={{
            padding: "25px",
            backgroundColor: "#fcfcfc",
          }}
        >
          {/* Display the results component which returns the results of the users 
              requested filters (rating, category, and price) */}
          <Results
            category={category}
            rating={rating}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </Content>
      </Layout>
      {/* Display the footer on the page from the footer component */}
      <Footer />
    </>
  );
};

export default Categories;
