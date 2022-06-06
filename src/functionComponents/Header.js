import { Layout, Space, Input, Button } from "antd";
import "./Header.css";
import AppName from "../assets/appName.png";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

const onSearch = (value) => console.log(value);

const Header = () => {
  const { Header } = Layout;
  const { Search } = Input;
  const { authenticate, account } = useMoralis();

  return (
    <div className="header">
      <Layout>
        <Header class="header">
          <Link to="/homepage">
            <img src={AppName} className="appName" alt="Logo" />
          </Link>

          <Space direction="vertical">
            <Search
              placeholder="Search for a product ..."
              onSearch={onSearch}
              enterButton
              className="searchBar"
            />
          </Space>

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
      </Layout>
    </div>
  );
};

export default Header;
