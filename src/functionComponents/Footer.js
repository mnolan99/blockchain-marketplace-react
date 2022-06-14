// Imports
import "./Footer.css";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// Component that returns the JSX code to display each of the footer elements
const Footer = () => {
  // Get the state of the Modal and set it to visible if specific link clicked
  const [isModalVisibleContact, setIsModalVisibleContact] = useState(false);
  const [isModalVisibleAbout, setIsModalVisibleAbout] = useState(false);
  const [isModalVisibleSiteMap, setIsModalVisibleSiteMap] = useState(false);
  const [isModalVisibleFAQS, setIsModalVisibleFAQS] = useState(false);

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
            <Link
              to="/homepage"
              style={{ color: "white", fontSize: "12px" }}
              onClick={() => setIsModalVisibleAbout(true)}
            >
              About Us
            </Link>
          </section>
          <section className="footer-info-details2">
            <Link
              to="/homepage"
              style={{ color: "white", fontSize: "12px" }}
              onClick={() => setIsModalVisibleSiteMap(true)}
            >
              Site Map
            </Link>
          </section>
        </section>

        {/* Second column */}
        <section className="footer-info-center">
          <section className="footer-info-header">Help</section>
          <section className="footer-info-details3">
            <Link
              to="/homepage"
              style={{ color: "white", fontSize: "12px" }}
              onClick={() => setIsModalVisibleContact(true)}
            >
              Contact Us
            </Link>
          </section>
          <section className="footer-info-details4">
            <Link
              to="/homepage"
              style={{ color: "white", fontSize: "12px" }}
              onClick={() => setIsModalVisibleFAQS(true)}
            >
              FAQs
            </Link>
          </section>
        </section>
      </section>
      <section className="footer-header">
        <h4>Martin Nolan</h4>
      </section>

      {/* Pop-up modal to display contact information if the contact us link is clicked in the footer */}
      <Modal
        title="Contact Us"
        visible={isModalVisibleContact}
        onOk={() => setIsModalVisibleContact(false)}
        onCancel={() => setIsModalVisibleContact(false)}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2>Contact Us</h2>
            <h4>
              Unfortunately it is not currently possible to contact us using
              this form. If you need more information, please contact
              martinnolan_1@live.co.uk.
            </h4>
          </div>
        </div>
      </Modal>

      {/* Pop-up modal to display about us information if the about us link is clicked in the footer */}
      <Modal
        title="About Us"
        visible={isModalVisibleAbout}
        onOk={() => setIsModalVisibleAbout(false)}
        onCancel={() => setIsModalVisibleAbout(false)}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2>About BlockShop</h2>
            <h4>
              BlockShop is a Web3 blockchain marketplace test application that
              allows users to purchase items using test cryptocurrency on the
              Polygon Testnet through Metamask. <br />
              <br />
              This application is used as part of a project for a dissertation
              at The University of the West of Scotland for the degree of MSc
              Mobile Web Development.
            </h4>
          </div>
        </div>
      </Modal>

      {/* Pop-up modal to display site map information if the site map link is clicked in the footer */}
      <Modal
        title="Site Map"
        visible={isModalVisibleSiteMap}
        onOk={() => setIsModalVisibleSiteMap(false)}
        onCancel={() => setIsModalVisibleSiteMap(false)}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2>Site Map</h2>
            <h4>
              Unfortunately it is not currently possible to view the site map.
            </h4>
          </div>
        </div>
      </Modal>

      {/* Pop-up modal to display FAQs if the FAQs link is clicked in the footer */}
      <Modal
        title="FAQs"
        visible={isModalVisibleFAQS}
        onOk={() => setIsModalVisibleFAQS(false)}
        onCancel={() => setIsModalVisibleFAQS(false)}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2>FAQs</h2>
            <h3>What is BlockShop?</h3>
            <h4>
              BlockShop is a Web3 blockchain marketplace test application that
              allows users to purchase items using test cryptocurrency on the
              Polygon Testnet through Metamask. This application is used as part
              of a project for a dissertation at The University of the West of
              Scotland for the degree of MSc Mobile Web Development.
            </h4>
            <br />
            <h3>How do I contact BlockShop?</h3>
            <h4>
              Unfortunately it is not currently possible to contact us using
              this form. If you need more information, please contact
              martinnolan_1@live.co.uk.
            </h4>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Footer;
