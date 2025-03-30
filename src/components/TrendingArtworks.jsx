import React from "react";
import "./TrendingArtworks.css";

const artworks = [
  {
    id: 1,
    title: "Sunset Bliss",
    img: "/images/birmingham-museums-trust-8wcoY3wcbL0-unsplash.jpg",
    artist: "Alice",
  },
  {
    id: 2,
    title: "Abstract Energy",
    img: "/images/boston-public-library-_f9cP4_unmg-unsplash.jpg",
    artist: "Bob",
  },
  {
    id: 3,
    title: "Serene Landscape",
    img: "/images/birmingham-museums-trust-Ct2Q6q29xds-unsplash.jpg",
    artist: "Charlie",
  },
  {
    id: 4,
    title: "Cosmic Dreams",
    img: "/images/europeana-TjegK_z-0j8-unsplash.jpg",
    artist: "Diana",
  },
  {
    id: 4,
    title: "Cosmic Dreams",
    img: "/images/steve-johnson-V1Ru2oH6hPY-unsplash.jpg",
    artist: "Diana",
  },
];

const TrendingArtworks = () => {
  return (
    <div className="trending-container">
      <h2>🔥 Trending Artworks</h2>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card">
            <img
              src={artwork.img}
              alt={artwork.title}
              className="artwork-image"
            />
            <h3>{artwork.title}</h3>
            <p>by {artwork.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArtworks;
