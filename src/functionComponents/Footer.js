// Imports
import "./Footer.css";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";

// Component that returns the JSX code to display each of the footer elements
const Footer = () => {
  return (
    <section className="footer">
      <section className="footer-header">
        <h1>BlockShop - Shop Securely On The Blockchain</h1>
      </section>

      {/* Centre the footer links and display them in two coloumns, 
          linking to the relevant pages */}
      <section className="footer-info">
        {/* First column */}
        <section className="footer-info-center">
          <section className="footer-info-header">About BlockShop</section>
          <section className="footer-info-details1">
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              About Us
            </Link>
          </section>
          <section className="footer-info-details2">
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              Site Map
            </Link>
          </section>
        </section>

        {/* Second column */}
        <section className="footer-info-center">
          <section className="footer-info-header">Help</section>
          <section className="footer-info-details3">
            <Link to="/homepage" style={{ color: "white", fontSize: "12px" }}>
              Contact Us
            </Link>
          </section>
          <section className="footer-info-details4">
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
