import "antd/dist/antd.min.css";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <section className="footer-header">
        <h1>BlockShop - Shop Securely On The Blockchain</h1>
      </section>
      <section className="footer-info">
        <section className="footer-info-center">
          <section className="footer-info-header">About BlockShop</section>
          <section className="footer-info-details">
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              About Us
            </Link>
            <br />
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              Site Map
            </Link>
          </section>
        </section>

        <section className="footer-info-center">
          <section className="footer-info-header">Help</section>
          <section className="footer-info-details">
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              Contact Us
            </Link>
            <br />
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              FAQs
            </Link>
          </section>
        </section>
      </section>
      <section className="footer-header">
        <h4>Martin Nolan</h4>
      </section>
    </section>
  );
};

export default Footer;
