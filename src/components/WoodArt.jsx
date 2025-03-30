// // import React from "react";
// // import "./WoodArt.css"; // Ensure this CSS file exists for styling

// // const woodArtworks = [
// //   {
// //     id: 1,
// //     title: "Carved Oak Panel",
// //     img: "/images/wood1.jpg",
// //     artist: "John Doe",
// //   },
// //   {
// //     id: 2,
// //     title: "Handmade Wooden Bowl",
// //     img: "/images/wood2.jpg",
// //     artist: "Jane Smith",
// //   },
// //   {
// //     id: 3,
// //     title: "Engraved Wooden Coaster",
// //     img: "/images/wood3.jpg",
// //     artist: "Mike Johnson",
// //   },
// // ];

// // const WoodArt = () => {
// //   return (
// //     <div className="wood-art-container">
// //       <h2>🪵 Wood Art Collection</h2>
// //       <div className="wood-art-grid">
// //         {woodArtworks.map((art) => (
// //           <div key={art.id} className="wood-art-card">
// //             <img src={art.img} alt={art.title} className="wood-art-image" />
// //             <h3>{art.title}</h3>
// //             <p>by {art.artist}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WoodArt;


// import React from "react";
// import "./Categories.css"; // Ensure this file includes the styles you provided

// const woodArtItems = [
//   { id: 1, title: "Handcrafted Wooden Bowl", image: "/images/wood1.jpg" },
//   { id: 2, title: "Vintage Wooden Carving", image: "/images/wood2.jpg" },
//   { id: 3, title: "Rustic Wooden Sculpture", image: "/images/wood3.jpg" },
//   { id: 4, title: "Wooden Jewelry Box", image: "/images/wood4.jpg" },
// ];

// const WoodArt = () => {
//   return (
//     <div className="category-page">
//       <h2 className="category-title">Wood Art Collection</h2>
//       <div className="category-gallery">
//         {woodArtItems.map((item) => (
//           <div key={item.id} className="art-item">
//             <img src={item.image} alt={item.title} className="art-image" />
//             <p className="art-title">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WoodArt;
import React from "react";
import "./Categories.css"; // Ensure this file includes the styles

const woodArtItems = [
  {
    id: 1,
    title: "Handcrafted Wooden Bowl",
    image: "/images/wood1.jpg",
    price: "$150",
  },
  {
    id: 2,
    title: "Vintage Wooden Carving",
    image: "/images/wood2.jpg",
    price: "$200",
  },
  {
    id: 3,
    title: "Rustic Wooden Sculpture",
    image: "/images/wood3.jpg",
    price: "$250",
  },
  {
    id: 4,
    title: "Wooden Jewelry Box",
    image: "/images/wood4.jpg",
    price: "$180",
  },
];

const WoodArt = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Wood Art Collection</h2>
      <div className="category-gallery">
        {woodArtItems.map((item) => (
          <div key={item.id} className="art-item">
            <img src={item.image} alt={item.title} className="art-image" />
            <p className="art-title">{item.title}</p>
            <p className="art-price">{item.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoodArt;
