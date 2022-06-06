import React from "react";
import "./Homepage.css";
import { Button, Layout } from "antd";
import Header from "../functionComponents/Header";
import Footer from "../functionComponents/Footer";

const Categories = () => {
  const { Sider, Content } = Layout;

  return (
    <>
      <Header />

      <Layout>
        <Sider
          width="300px"
          theme="light"
          style={{
            padding: "25px",
            backgroundColor: "#fcfcfc",
            borderRight: "10px solid black",
          }}
        >
          <h1>Categories</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
            <Button className="">Apply Filters</Button>
          </div>
        </Sider>

        <Content>
          <h1>Content Here</h1>
        </Content>
      </Layout>

      <Footer />
    </>
  );
};

export default Categories;
