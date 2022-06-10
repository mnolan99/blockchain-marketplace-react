// Imports
import "./Results.css";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import { products } from "../products.js";

// Component that returns the results of the users requested filters (rating and price)
function Results({ category, rating, priceMin, priceMax }) {
  // Create a new array with products matching the users selected filters
  const cat = products[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax);
  return (
    <>
      {/* Return array matching the users selected filters and 
          display the array (product) details inside a card */}
      {cat.map((chosenCat, i) => {
        return (
          <Card style={{ margin: "15px" }}>
            <div style={{ display: "flex" }}>
              <img
                src={chosenCat.image}
                alt={i}
                height="200px"
                width="220px"
              ></img>
              <div style={{ display: "block", paddingLeft: "30px" }}>
                <p className="productName">{chosenCat.name}</p>
                <Rate value={chosenCat.rating} disabled={true}></Rate>
                <h2> £{chosenCat.price}</h2>
                <p>{chosenCat.about}</p>
                <Link to="/productDetails" state={chosenCat} className="link">
                  View Product
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default Results;
