// import React from "react";
// import "./TrendingArtworks.css";

// const artworks = [
//   {
//     id: 1,
//     title: "Sunset Bliss",
//     img: "/images/birmingham-museums-trust-8wcoY3wcbL0-unsplash.jpg",
//     artist: "Alice",
//   },
//   {
//     id: 2,
//     title: "Abstract Energy",
//     img: "/images/boston-public-library-_f9cP4_unmg-unsplash.jpg",
//     artist: "Bob",
//   },
//   {
//     id: 3,
//     title: "Serene Landscape",
//     img: "/images/birmingham-museums-trust-Ct2Q6q29xds-unsplash.jpg",
//     artist: "Charlie",
//   },
//   {
//     id: 4,
//     title: "Cosmic Dreams",
//     img: "/images/europeana-TjegK_z-0j8-unsplash.jpg",
//     artist: "Diana",
//   },
//   {
//     id: 5,
//     title: "Cosmic Dreams",
//     img: "/images/steve-johnson-V1Ru2oH6hPY-unsplash.jpg",
//     artist: "Diana",
//   },
// ];

// const TrendingArtworks = () => {
//   return (
//     <div className="trending-container">
//       <h2>🔥 Trending Artworks</h2>
//       <div className="artwork-grid">
//         {artworks.map((artwork) => (
//           <div key={artwork.id} className="artwork-card">
//             <img
//               src={artwork.img}
//               alt={artwork.title}
//               className="artwork-image"
//             />
//             <h3>{artwork.title}</h3>
//             <p>by {artwork.artist}</p>
//             <button className="buy-button">Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendingArtworks;





import React from "react";
import { Link } from "react-router-dom";
import "./TrendingArtworks.css";

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

const TrendingArtworks = () => {
  return (
    <div className="trending-container">
      <h2>🔥 Trending Artworks</h2>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card">
            {/* Link to artwork details page */}
            <Link to={`/artwork/${artwork.id}`} className="artwork-link">
              <img
                src={artwork.img}
                alt={artwork.title}
                className="artwork-image"
              />
            </Link>
            <h3>{artwork.title}</h3>
            <p>by {artwork.artist}</p>
            <p className="artwork-price">{artwork.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArtworks;




