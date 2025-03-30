import React from "react";
import Categories from "./Categories";
import TrendingArtworks from "./TrendingArtworks";
import ArtCollectionsText from "./ArtCollectionsText";
import FeaturedArtist from "./FeaturedArtist";

import SearchFilter from "./SearchFilter";
// import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-text">
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "2.3rem",
            fontWeight: "650",
            color: "#2c2c2c",
            letterSpacing: "1.5px",
            textTransform: "capitalize",
          }}
        >
          "Where Art Finds Its True Admirers." 
        </h2>
      </div>

      {/* Categories Section */}
      <Categories />
      <ArtCollectionsText />
      <TrendingArtworks />
      {/* <SearchByMedium /> */}
      <FeaturedArtist />
      {/* <SearchFilter onSearch={(filters) => console.log(filters)} /> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
