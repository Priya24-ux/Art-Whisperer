// import React from "react";
// import "./Categories.css"; // Ensure this file includes the styles you provided

// const sculptureItems = [
//   { id: 1, title: "Marble Bust", image: "/images/s1.jpg" },
//   { id: 2, title: "Bronze Warrior", image: "/images/s2.jpg" },
//   { id: 3, title: "Abstract Stone Carving", image: "/images/s3.jpg" },
//   { id: 4, title: "Wooden Figurine", image: "/images/s4.jpg" },
// ];

// const Sculptures = () => {
//   return (
//     <div className="category-page">
//       <h2 className="category-title">Sculpture Collection</h2>
//       <div className="category-gallery">
//         {sculptureItems.map((item) => (
//           <div key={item.id} className="art-item">
//             <img src={item.image} alt={item.title} className="art-image" />
//             <p className="art-title">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sculptures;




import React from "react";
import "./Categories.css"; // Ensure this file includes the styles

const sculptureItems = [
  { id: 1, title: "Marble Bust", image: "/images/s1.jpg", price: "$500" },
  { id: 2, title: "Bronze Warrior", image: "/images/s2.jpg", price: "$750" },
  {
    id: 3,
    title: "Abstract Stone Carving",
    image: "/images/s3.jpg",
    price: "$600",
  },
  { id: 4, title: "Wooden Figurine", image: "/images/s4.jpg", price: "$400" },
];

const Sculptures = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Sculpture Collection</h2>
      <div className="category-gallery">
        {sculptureItems.map((item) => (
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

export default Sculptures;
