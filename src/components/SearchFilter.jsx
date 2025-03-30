// import React, { useState } from "react";
// import "./SearchFilter.css";

// const SearchFilter = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedMedium, setSelectedMedium] = useState("");

//   const handleSearch = () => {
//     onSearch({ searchTerm, selectedPrice, selectedCategory, selectedMedium });
//   };

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         placeholder="Search artwork..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <select onChange={(e) => setSelectedPrice(e.target.value)}>
//         <option value="">Search by Price</option>
//         <option value="low">Low ($0 - $50)</option>
//         <option value="medium">Medium ($50 - $200)</option>
//         <option value="high">High ($200+)</option>
//       </select>

//       <select onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="">Search by Category</option>
//         <option value="abstract">Abstract</option>
//         <option value="portrait">Portrait</option>
//         <option value="landscape">Landscape</option>
//       </select>

//       <select onChange={(e) => setSelectedMedium(e.target.value)}>
//         <option value="">Search by Medium</option>
//         <option value="oil">Oil Painting</option>
//         <option value="watercolor">Watercolor</option>
//         <option value="digital">Digital Art</option>
//       </select>

//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchFilter;




// import React, { useState } from "react";
// import "./SearchFilter.css";
// import { FaSearch } from "react-icons/fa";

// const SearchFilter = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch(query);
//     }
//   };

//   return (
//     <div className="search-filter-container">
//       <h2 className="search-title">Find Your Perfect Artwork 🎨</h2>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by artist, price, category..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch} className="search-button">
//           <FaSearch />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;


// import React, { useState } from "react";
// import "./SearchFilter.css";
// import { FaSearch, FaTag, FaUser, FaDollarSign } from "react-icons/fa";

// const SearchFilter = ({ onSearch }) => {
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [artist, setArtist] = useState("");

//   const handleSearch = () => {
//     onSearch({ price, category, artist });
//   };

//   return (
//     <div className="search-filter">
//       <h2 className="search-title">Filter Artworks</h2>

//       <div className="filter-group">
//         <label>
//           <FaDollarSign /> Price Range:
//         </label>
//         <select value={price} onChange={(e) => setPrice(e.target.value)}>
//           <option value="">Select Price</option>
//           <option value="low">Under $50</option>
//           <option value="medium">$50 - $200</option>
//           <option value="high">Above $200</option>
//         </select>
//       </div>

//       <div className="filter-group">
//         <label>
//           <FaTag /> Category:
//         </label>
//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Select Category</option>
//           <option value="painting">Painting</option>
//           <option value="sculpture">Sculpture</option>
//           <option value="digital">Digital Art</option>
//         </select>
//       </div>

//       <div className="filter-group">
//         <label>
//           <FaUser /> Artist:
//         </label>
//         <input
//           type="text"
//           placeholder="Search by Artist"
//           value={artist}
//           onChange={(e) => setArtist(e.target.value)}
//         />
//       </div>

//       <button className="search-btn" onClick={handleSearch}>
//         <FaSearch /> Search
//       </button>
//     </div>
//   );
// };

// export default SearchFilter;


import React, { useState } from "react";
import "./SearchFilter.css";
import { FaSearch, FaTag, FaUser, FaDollarSign } from "react-icons/fa"; // Icons for clarity

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [artist, setArtist] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query, price, category, artist });
    }
  };

  return (
    <div className="search-filter-container">
      <h2 className="search-title">Find Your Perfect Artwork 🎨</h2>

      {/* Main Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by artist, price, category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-group">
          <label>
            <FaDollarSign /> Price:
          </label>
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="">Select Price</option>
            <option value="low">Under $50</option>
            <option value="medium">$50 - $200</option>
            <option value="high">Above $200</option>
          </select>
        </div>

        <div className="filter-group">
          <label>
            <FaTag /> Category:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="digital">Digital Art</option>
          </select>
        </div>

        <div className="filter-group">
          <label>
            <FaUser /> Artist:
          </label>
          <input
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
      </div>

      <button
        className="search-button filter-search-btn"
        onClick={handleSearch}
      >
        <FaSearch /> Apply Filters
      </button>
    </div>
  );
};

export default SearchFilter;
