import React from "react";
import "./Homepage.css";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Row, Col } from "antd";
import Header from "../functionComponents/Header";
import Footer from "../functionComponents/Footer";
import AppNameLogo from "../assets/appNameWithLogo.png";
import MacbookAir2020 from "../assets/Products/2020-Macbook-Air.jpg";
import UnderArmourSport from "../assets/Products/MensUASportStyleTee.jpg";
import UnderArmourRaidShorts from "../assets/Products/UnderArmourRaidShorts.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section class="container" style={{ borderBottom: "10px solid black" }}>
        <div class="one">
          <h1>A Decentralised Marketplace For All Your Shopping Needs</h1>
          <h3>
            Shop with peace of mind that your goods and transactions will always
            be protected.
          </h3>
          <Button
            className="login-btn"
            key="1"
            type="primary"
            onClick={() => navigate("/categories")}
          >
            <span>Shop Now</span>
          </Button>
        </div>
        <div class="two">
          {" "}
          <img src={AppNameLogo} className="appNameLogo" alt="Logo" />
        </div>
      </section>
      <section class="container" style={{ marginTop: "0px" }}>
        <div
          class="one"
          style={{ borderRight: "10px solid black", height: "500px" }}
        >
          <h1 style={{ textAlign: "left", marginTop: "10px" }}>Popular Now</h1>
          <div className="site-card-border-less-wrapper">
            <Card title="Laptops" bordered={true} style={{ width: 350 }}>
              <img src={MacbookAir2020} className="cardImage" alt="Logo" />
              <span className="cardText">
                <p style={{ fontWeight: "bold" }}>
                  Apple MacBook Pro Laptop 2021
                </p>
                <p>£999.99</p>
                <p style={{ marginBottom: 0 }}>Available Now</p>
              </span>
              <Link to="/categories" state={"Laptops"} className="link">
                View Laptops
              </Link>
            </Card>
          </div>
        </div>
        <div class="one" style={{ height: "500px" }}>
          <h1 style={{ textAlign: "left", marginTop: "10px" }}>
            Recently Viewed
          </h1>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Tops" bordered={true} style={{ width: 350 }}>
                  <img
                    src={UnderArmourSport}
                    className="cardImage"
                    alt="Logo"
                  />
                  <span className="cardText">
                    <p style={{ fontWeight: "bold" }}>
                      Under Armour Men's Sportstyle Top
                    </p>
                    <p>£11.99</p>
                    <p style={{ marginBottom: 0 }}>Available Now</p>
                  </span>
                  <Link to="/categories" state={"Tops"} className="link">
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
                    <p style={{ fontWeight: "bold" }}>
                      Under Armour Raid 8 Men's Sports Shorts
                    </p>
                    <p>£28.99</p>
                    <p style={{ marginBottom: 0 }}>Out of Stock</p>
                  </span>
                  <Link to="/categories" state={"Shorts"} className="link">
                    View Shorts
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
