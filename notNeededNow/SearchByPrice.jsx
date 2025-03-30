import React, { useState } from "react";
import "./SearchByPrice.css";

const SearchByPrice = () => {
  const [price, setPrice] = useState(500);

  return (
    <div className="search-price-section">
      <h2 className="search-title">Search by Price</h2>
      <input
        type="range"
        min="100"
        max="5000"
        step="100"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="price-slider"
      />
      <p className="price-display">Up to ₹{price}</p>
      <button className="filter-button">Apply Filter</button>
    </div>
  );
};

export default SearchByPrice;
