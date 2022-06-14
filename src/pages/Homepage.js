// Imports
import "./Homepage.css";
import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Header from "../functionComponents/Header";
import Footer from "../functionComponents/Footer";
import AppNameLogo from "../assets/appNameWithLogo.png";
import MacbookAir2020 from "../assets/Products/2020-Macbook-Air.jpg";
import UnderArmourSport from "../assets/Products/MensUASportStyleTee.jpg";
import UnderArmourRaidShorts from "../assets/Products/UnderArmourRaidShorts.jpg";

const Homepage = () => {
  return (
    <>
      {/* Display the header from the header component*/}
      <Header />

      {/* Display two containers side-by-side to show information 
          about the website, as well as the website logo */}
      <section class="container" style={{ borderBottom: "5px solid black" }}>
        <div class="one">
          <h1>A Decentralised Marketplace For All Your Shopping Needs</h1>
          <h3>
            Shop with peace of mind that your goods and transactions will always
            be protected.
          </h3>
          {/* Link using react-router to allow the user to browse the products. 
              Currently, this links to the headphones category */}
          <Link to="/categories" state={"Headphones"} className="shop-link">
            Shop Now
          </Link>
        </div>
        <div class="two">
          {" "}
          <img src={AppNameLogo} className="appNameLogo" alt="Logo" />
        </div>
      </section>

      {/* Display two containers side-by-side to show popular and recently featured
          viewed items. These are displayed inside antd cards, with inline styling and styling, 
          and links to the categories page that take the selected category as a state so that the 
          correct products relating to the specified category can be displayed */}
      <section class="container" style={{ marginTop: "0px" }}>
        <div
          class="one"
          style={{ borderRight: "5px solid black", height: "500px" }}
        >
          <h1 style={{ textAlign: "left", marginTop: "10px" }}>Popular Now</h1>
          <div>
            <Card title="Laptops" bordered={true} style={{ width: 350 }}>
              <img src={MacbookAir2020} className="cardImage" alt="Logo" />
              <span className="cardText">
                <p style={{ fontWeight: "bold", marginBottom: 0 }}>
                  Apple MacBook Pro Laptop 2021
                </p>
                <p style={{ marginBottom: 0 }}>$999.99</p>
                <p style={{ marginBottom: 10 }}>Available Now</p>
              </span>
              <Link
                to="/categories"
                state={"Laptops"}
                className="link"
                style={{ marginLeft: "-18px" }}
              >
                View Laptops
              </Link>
            </Card>
          </div>
        </div>
        <div class="one" style={{ height: "500px" }}>
          <h1 style={{ textAlign: "left", marginTop: "10px" }}>
            Recently Viewed
          </h1>
          <div>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Tops" bordered={true} style={{ width: 350 }}>
                  <img
                    src={UnderArmourSport}
                    className="cardImage"
                    alt="Logo"
                  />
                  <span className="cardText">
                    <p style={{ fontWeight: "bold", marginBottom: 0 }}>
                      Under Armour Men's Sportstyle Top
                    </p>
                    <p style={{ marginBottom: 0 }}>$11.99</p>
                    <p style={{ marginBottom: 10 }}>Available Now</p>
                  </span>
                  <Link
                    to="/categories"
                    state={"Tops"}
                    className="link"
                    style={{ marginLeft: "-6px" }}
                  >
                    View Tops
                  </Link>
                </Card>
              </Col>
              <Col span={8}></Col>
              <Col span={8}>
                <Card title="Shorts" bordered={true} style={{ width: 350 }}>
                  <img
                    src={UnderArmourRaidShorts}
                    className="cardImage"
                    alt="Logo"
                  />
                  <span className="cardText">
                    <p style={{ fontWeight: "bold", marginBottom: 0 }}>
                      Under Armour Raid 8 Men's Sports Shorts
                    </p>
                    <p style={{ marginBottom: 0 }}>$28.99</p>
                    <p style={{ marginBottom: 10 }}>Available Now</p>
                  </span>
                  <Link
                    to="/categories"
                    state={"Shorts"}
                    className="link"
                    style={{ marginLeft: "-10px" }}
                  >
                    View Shorts
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* Display the footer on the page from the footer component */}
      <Footer />
    </>
  );
};

export default Homepage;
