// import React from "react";
// import "./CategoryPage.css"; // Create a common CSS file for styling

// const Paintings = () => {
//   const paintings = [
//     { id: 1, src: "/images/sunset.jpg", title: "Sunset Bliss" },
//     { id: 2, src: "/images/abst.jpg", title: "Abstract Flow" },
//     { id: 3, src: "/images/ocean.jpg", title: "Ocean Waves" },
//   ];

//   return (
//     <div className="category-page">
//       <h2 className="category-title">Paintings</h2>
//       <div className="category-gallery">
//         {paintings.map((painting) => (
//           <div key={painting.id} className="art-item">
//             <img
//               src={painting.src}
//               alt={painting.title}
//               className="art-image"
//             />
//             <p className="art-title">{painting.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Paintings;



import React from "react";
import "./CategoryPage.css"; // Ensure this file includes the styles

const Paintings = () => {
  const paintings = [
    { id: 1, src: "/images/sunset.jpg", title: "Sunset Bliss", price: "$180" },
    { id: 2, src: "/images/abst.jpg", title: "Abstract Flow", price: "$220" },
    { id: 3, src: "/images/ocean.jpg", title: "Ocean Waves", price: "$200" },
  ];

  return (
    <div className="category-page">
      <h2 className="category-title">Paintings</h2>
      <div className="category-gallery">
        {paintings.map((painting) => (
          <div key={painting.id} className="art-item">
            <img
              src={painting.src}
              alt={painting.title}
              className="art-image"
            />
            <p className="art-title">{painting.title}</p>
            <p className="art-price">{painting.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
