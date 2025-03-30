import React from "react";
import "./SearchByMedium.css";

const SearchByMedium = () => {
  return (
    <div className="search-medium-section">
      <h2 className="search-title">Search by Medium</h2>
      <input
        type="text"
        placeholder="Search for a medium..."
        className="medium-search-input"
      />
      <div className="medium-buttons">
        <button>Oil Paint</button>
        <button>Watercolor</button>
        <button>Digital Art</button>
        <button>Acrylic</button>
        <button>Sketch</button>
      </div>
    </div>
  );
};

export default SearchByMedium;
