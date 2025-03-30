import React from "react";
import { useParams } from "react-router-dom";
import "./ArtworkDetails.css";

const artworks = [
  {
    id: 1,
    title: "Sunset Bliss",
    img: "/images/birmingham-museums-trust-8wcoY3wcbL0-unsplash.jpg",
    artist: "Alice",
    description: "A beautiful sunset painting with warm colors.",
    price: "$120",
  },
  {
    id: 2,
    title: "Abstract Energy",
    img: "/images/boston-public-library-_f9cP4_unmg-unsplash.jpg",
    artist: "Bob",
    description: "A modern abstract art piece full of energy.",
    price: "$150",
  },
  {
    id: 3,
    title: "Serene Landscape",
    img: "/images/birmingham-museums-trust-Ct2Q6q29xds-unsplash.jpg",
    artist: "Charlie",
    description: "A peaceful landscape painting with natural elements.",
    price: "$180",
  },
  {
    id: 4,
    title: "Cosmic Dreams",
    img: "/images/europeana-TjegK_z-0j8-unsplash.jpg",
    artist: "Diana",
    description: "An artistic representation of the cosmos.",
    price: "$200",
  },
  {
    id: 5,
    title: "Galactic Horizon",
    img: "/images/steve-johnson-V1Ru2oH6hPY-unsplash.jpg",
    artist: "Diana",
    description: "A futuristic view of the galaxy beyond the horizon.",
    price: "$250",
  },
];

const ArtworkDetails = () => {
  const { id } = useParams();
  const artwork = artworks.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return <h2>Artwork not found</h2>;
  }

  return (
    <div className="artwork-details-container">
      <img
        src={artwork.img}
        alt={artwork.title}
        className="artwork-detail-image"
      />
      <h2 className="artwork-title">{artwork.title}</h2>
      <p className="artwork-artist">
        <strong>Artist:</strong> {artwork.artist}
      </p>
      <p className="artwork-description">{artwork.description}</p>

      <p className="artwork-price">{artwork.price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ArtworkDetails;
