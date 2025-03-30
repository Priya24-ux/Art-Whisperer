// import React from "react";
// import "./Categories.css"; // Ensure this file includes the styles you provided

// const digitalArtItems = [
//   { id: 1, title: "Abstract Cyber Art", image: "/images/digi2.jpg" },
//   { id: 2, title: "Futuristic Landscape", image: "/images/digi3.jpg" },
//   { id: 3, title: "Neon City Illustration", image: "/images/digi4.jpg" },
//   { id: 4, title: "Fantasy Digital Portrait", image: "/images/digitalArt.jpg" },
// ];

// const DigitalArt = () => {
//   return (
//     <div className="category-page">
//       <h2 className="category-title">Digital Art Collection</h2>
//       <div className="category-gallery">
//         {digitalArtItems.map((item) => (
//           <div key={item.id} className="art-item">
//             <img src={item.image} alt={item.title} className="art-image" />
//             <p className="art-title">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalArt;




import React from "react";
import "./Categories.css"; // Ensure this file includes the styles you provided

const digitalArtItems = [
  {
    id: 1,
    title: "Abstract Cyber Art",
    image: "/images/digi2.jpg",
    price: "$150",
  },
  {
    id: 2,
    title: "Futuristic Landscape",
    image: "/images/digi3.jpg",
    price: "$180",
  },
  {
    id: 3,
    title: "Neon City Illustration",
    image: "/images/digi4.jpg",
    price: "$200",
  },
  {
    id: 4,
    title: "Fantasy Digital Portrait",
    image: "/images/digitalArt.jpg",
    price: "$250",
  },
];

const DigitalArt = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Digital Art Collection</h2>
      <div className="category-gallery">
        {digitalArtItems.map((item) => (
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

export default DigitalArt;
