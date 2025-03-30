// import React from "react";
// import "./Categories.css"; // Ensure this file includes the styles you provided

// const photographyItems = [
//   { id: 1, title: "Sunset Over the Hills", image: "/images/p1.jpg" },
//   { id: 2, title: "City Lights at Night", image: "/images/p2.jpg" },
//   { id: 3, title: "Wilderness and Wildlife", image: "/images/p3.jpg" },
//   { id: 4, title: "Black & White Portrait", image: "/images/p4.jpg" },
// ];

// const Photography = () => {
//   return (
//     <div className="category-page">
//       <h2 className="category-title">Photography Collection</h2>
//       <div className="category-gallery">
//         {photographyItems.map((item) => (
//           <div key={item.id} className="art-item">
//             <img src={item.image} alt={item.title} className="art-image" />
//             <p className="art-title">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Photography;




import React from "react";
import "./Categories.css"; // Ensure this file includes the styles

const photographyItems = [
  {
    id: 1,
    title: "Sunset Over the Hills",
    image: "/images/p1.jpg",
    price: "$150",
  },
  {
    id: 2,
    title: "City Lights at Night",
    image: "/images/p2.jpg",
    price: "$200",
  },
  {
    id: 3,
    title: "Wilderness and Wildlife",
    image: "/images/p3.jpg",
    price: "$180",
  },
  {
    id: 4,
    title: "Black & White Portrait",
    image: "/images/p4.jpg",
    price: "$250",
  },
];

const Photography = () => {
  return (
    <div className="category-page">
      <h2 className="category-title">Photography Collection</h2>
      <div className="category-gallery">
        {photographyItems.map((item) => (
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

export default Photography;
