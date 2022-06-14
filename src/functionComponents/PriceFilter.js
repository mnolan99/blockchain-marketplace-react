// Imports
import { Space, InputNumber } from "antd";
import "./PriceFilter.css";

function PriceFilter({ priceMin, setPriceMin, priceMax, setPriceMax }) {
  // Function to allow the user to filter by price
  function filterPrice(min, max) {
    setPriceMin(min);
    setPriceMax(max);
  }

  // Return the JSX code to display each of the price ranges
  return (
    <>
      {/* Display each of the price ranges and run changePrice 
      f   unction to reflect the chosen filter */}
      <h3>Price</h3>
      <p className="amount" onClick={() => filterPrice(0, 50)}>
        Under $50
      </p>
      <p className="amount" onClick={() => filterPrice(50, 100)}>
        $50 to $100
      </p>
      <p className="amount" onClick={() => filterPrice(100, 200)}>
        $100 to $200
      </p>
      <p className="amount" onClick={() => filterPrice(200, 1000)}>
        $200+
      </p>

      {/* Allow the user to enter specific values to filter 
          the products by a specific price */}
      <Space>
        <InputNumber
          value={priceMin}
          formatter={(value) => `$ ${value}`}
          onChange={(value) => filterPrice(value, priceMax)}
        />
        <InputNumber
          value={priceMax}
          formatter={(value) => `$ ${value}`}
          onChange={(value) => filterPrice(priceMin, value)}
        />
      </Space>
      <br />
      <br />
    </>
  );
}

export default PriceFilter;
