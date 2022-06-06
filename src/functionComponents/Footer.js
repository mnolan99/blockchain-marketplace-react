import { Layout } from "antd";
import "./Footer.css";
import "antd/dist/antd.min.css";

const Footer = () => {
  const { Footer } = Layout;

  return (
    <div className="footer">
      <Layout>
        <Footer class="footer">
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </div>
  );
};

export default Footer;
