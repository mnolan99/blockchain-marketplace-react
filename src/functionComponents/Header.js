// Imports
import "./Header.css";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import AppName from "../assets/appName.png";
import { MenuOutlined } from "@ant-design/icons";
import { Layout, Space, Input, Button, Modal } from "antd";

// Array of categories to be displayed in subheader
const categories = ["Laptops", "Headphones", "Tops", "Shorts", "Jeans"];

// Component that returns the JSX code to display each of the header elements
const Header = () => {
  // Deconstruct the imports
  const { Header } = Layout;
  const { Search } = Input;

  // Authenticate the users login using Metamask with Moralis
  const { authenticate, account } = useMoralis();
  const [isModalVisibleSearch, setIsModalVisibleSearch] = useState(false);

  return (
    <div className="header">
      <Layout>
        <Header class="header">
          {/* Display website logo and link to homepage  */}
          <Link to="/homepage">
            <img src={AppName} className="appName" alt="Logo" />
          </Link>

          {/* Searchbar -- This currently does not allow you to search */}
          <Space direction="vertical">
            <Search
              placeholder="Search for a product ..."
              enterButton
              className="searchBar"
              onSearch={() => setIsModalVisibleSearch(true)}
            />
          </Space>

          {/* Button to login - If clicked, the authenticate function 
              will be run which will Authenticate the users login using 
              Metamask with Moralis. If logged in, the first 7 chars of the
              cryptocurreny wallet address will be displayed */}
          <Space direction="vertical">
            <Button
              className="login-btn"
              key="1"
              type="primary"
              onClick={() => authenticate()}
            >
              {account ? (
                <span>{account.slice(0, 7)}...</span>
              ) : (
                <span>Login</span>
              )}
            </Button>
          </Space>
        </Header>

        {/* Subheader displaying the available categories to choose from */}
        <div className="subheader">
          <Space size={"middle"}>
            <Space size={"small"} style={{ fontWeight: "bold" }}>
              <MenuOutlined />
              Categories
            </Space>

            {/* Return a new array with all categories, link to the categories page, and 
                update the state to reflect the chosen category */}
            {categories.map((chosenCat) => {
              return (
                <Link to="/categories" state={chosenCat} className="categories">
                  {chosenCat}
                </Link>
              );
            })}
          </Space>
        </div>
      </Layout>

      {/* Pop-up modal to display information about the search bar.
          This lets the user know that the search function doesn't currently work */}
      <Modal
        title="Search Query"
        visible={isModalVisibleSearch}
        onOk={() => setIsModalVisibleSearch(false)}
        onCancel={() => setIsModalVisibleSearch(false)}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2>Search</h2>
            <h>
              Unfortunately it is not currently possible to search for products.
            </h>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
