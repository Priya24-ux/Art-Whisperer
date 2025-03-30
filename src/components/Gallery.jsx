// // import React from "react";
// // import "./Gallery.css";
// // import images from "./galleryData"; // Importing image data

// // const Gallery = () => {
// //   return (
// //     <div className="gallery-container">
// //       <h2 className="gallery-heading">Discover Our Art Collection</h2>
// //       <div className="gallery-grid">
// //         {images.map((image, index) => (
// //           <div key={index} className="gallery-item">
// //             <img src={image.src} alt={image.title} className="gallery-img" />
// //             <div className="gallery-overlay">
// //               <h3>{image.title}</h3>
// //               <p>{image.artist}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Gallery;



// import React from "react";
// import "./Gallery.css";
// import images from "./galleryData"; // Importing image data

// const Gallery = () => {
//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-heading">🎨 Discover Our Art Collection</h2>
//       <div className="gallery-carousel">
//         {images.map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image.src} alt={image.title} className="gallery-img" />
//             <div className="gallery-overlay">
//               <h3>{image.title}</h3>
//               <p>{image.artist}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;








// import React from "react";
// import "./Gallery.css";
// const artworks = [
//   {
//     title: "Sunset Bliss",
//     artist: "Alicia Brown",
//     image: "/images/modern1.jpg",
//   },
//   {
//     title: "Abstract Harmony",
//     artist: "James Carter",
//     image: "/images/modern2.jpg",
//   },
//   {
//     title: "Forest Serenity",
//     artist: "Lena Wilson",
//     image: "/images/landscape1.jpg",
//   },
//   {
//     title: "Forest Serenity",
//     artist: "Lena Wilson",
//     image: "/images/landscape2.jpg",
//   },
// ];

// const Gallery = () => {
//   return (
//     <div className="bg-gray-700 py-10">
//       <h2 className="text-white text-3xl font-bold text-center mb-6">
//         Discover Our Art Collection
//       </h2>
//       <div className="flex justify-center gap-6">
//         {artworks.map((art, index) => (
//           <div
//             key={index}
//             className="bg-black text-white p-4 rounded-lg shadow-lg w-60"
//           >
//             <img
//               src={art.image}
//               alt={art.title}
//               className="w-full h-64 object-cover rounded-md"
//             />
//             <h3 className="text-lg font-semibold mt-3">{art.title}</h3>
//             <p className="text-gray-400">by {art.artist}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Gallery.css";

// const galleryData = [
//   {
//     id: 1,
//     src: "/images/landscape1.jpg",
//     title: "Forest Serenity",
//     desc: "A breathtaking forest view.",
//   },
//   {
//     id: 2,
//     src: "/images/landscape2.jpg",
//     title: "Mountain View",
//     desc: "Snow-covered peaks under the sky.",
//   },
//   {
//     id: 3,
//     src: "/images/landscape3.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//   },
//   {
//     id: 3,
//     src: "/images/landscape3.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//   },
// ];

// const GalleryCard = ({ src, title, desc }) => {
//   return (
//     <div className="col-md-4 col-sm-6">
//       <div className="card text-white shadow-lg border-0">
//         <img
//           src={src}
//           className="card-img-top img-fluid"
//           alt={title}
//           style={{ height: "280px", objectFit: "cover", borderRadius: "8px" }}
//         />
//         <div className="card-body text-center">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text text-muted">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const GalleryPage = () => {
//   return (
//     <div
//       className="container gallery-container py-5"
//       style={{ backgroundColor: "#111", color: "white" }}
//     >
//       <h2 className="text-center mb-5">Discover Our Art Collection</h2>
//       <div className="row justify-content-center g-4">
//         {galleryData.map((item) => (
//           <GalleryCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;














// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Gallery.css";

// const galleryData = [
//   {
//     id: 1,
//     src: "/images/landscape1.jpg",
//     title: "Forest Serenity",
//     desc: "A breathtaking forest view.",
//   },
//   {
//     id: 2,
//     src: "/images/landscape2.jpg",
//     title: "Mountain View",
//     desc: "Snow-covered peaks under the sky.",
//   },
//   {
//     id: 3,
//     src: "/images/modern1.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//   },
//   {
//     id: 3,
//     src: "/images/modern2.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//   },
// ];

// const GalleryCard = ({ src, title, desc }) => {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-12">
//       <div className="gallery-card">
//         <img src={src} className="gallery-img" alt={title} />
//         <div className="gallery-info">
//           <h5>{title}</h5>
//           <p>{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const GalleryPage = () => {
//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-title">Discover Our Art Collection</h2>
//       <div className="row">
//         {galleryData.map((item) => (
//           <GalleryCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;





// import React from "react";
// import "./Gallery.css";

// const galleryData = [
//   {
//     id: 10,
//     src: "/images/digi3.jpg",
//     title: "Forest Serenity",
//     desc: "A breathtaking forest view.",
//     price: "$200",
//   },
//   {
//     id: 9,
//     src: "/images/p4.jpg",
//     title: "Mountain View",
//     desc: "Snow-covered peaks .",
//     price: "$250",
//   },
//   {
//     id: 8,
//     src: "/images/digi4.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: "$300",
//   },
//   {
//     id: 7, // Fixed duplicate ID
//     src: "/images/wood1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: "$350",
//   },

//   {
//     id: 6,
//     src: "/images/p1.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: "$400",
//   },
//   {
//     id: 5, // Fixed duplicate ID
//     src: "/images/s1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: "$450",
//   },

//   {
//     id: 4,
//     src: "/images/modern2.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: "$500",
//   },
//   {
//     id: 3, // Fixed duplicate ID
//     src: "/images/modern1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: "$550",
//   },
//   {
//     id: 2,
//     src: "/images/landscape2.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: "$600",
//   },
//   {
//     id: 1, // Fixed duplicate ID
//     src: "/images/landscape1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: "$650",
//   },
// ];

// const GalleryCard = ({ src, title, desc,price }) => {
//   return (
//     <div className="gallery-card">
//       <img src={src} className="gallery-img" alt={title} />
//       <div className="gallery-info">
//         <h5>{title}</h5>
//         <p>{desc}</p>
//         <p className="artwork-price">{price}</p>
//         <button className="buy-button">Buy Now</button>
//       </div>
//     </div>
//   );
// };

// const GalleryPage = () => {
//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-title">Discover Our Art Collection</h2>
//       <div className="row">
//         {galleryData.map((item) => (
//           <GalleryCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;







// import React, { useState } from "react";
// import "./Gallery.css";
// import SearchFilter from "./SearchFilter";

// const galleryData = [
//   {
//     id: 10,
//     src: "/images/digi3.jpg",
//     title: "Forest Serenity",
//     desc: "A breathtaking forest view.",
//     price: 200,
//     category: "landscape",
//     artist: "Alice",
//   },
//   {
//     id: 9,
//     src: "/images/p4.jpg",
//     title: "Mountain View",
//     desc: "Snow-covered peaks.",
//     price: 250,
//     category: "landscape",
//     artist: "Bob",
//   },
//   {
//     id: 8,
//     src: "/images/digi4.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: 300,
//     category: "painting",
//     artist: "Charlie",
//   },
//   {
//     id: 7,
//     src: "/images/wood1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: 350,
//     category: "modern",
//     artist: "Diana",
//   },
//   {
//     id: 6,
//     src: "/images/p1.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: 400,
//     category: "painting",
//     artist: "Emma",
//   },
//   {
//     id: 5,
//     src: "/images/s1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: 450,
//     category: "sculpture",
//     artist: "Frank",
//   },
//   {
//     id: 4,
//     src: "/images/modern2.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: 500,
//     category: "modern",
//     artist: "Grace",
//   },
//   {
//     id: 3,
//     src: "/images/modern1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: 550,
//     category: "modern",
//     artist: "Hank",
//   },
//   {
//     id: 2,
//     src: "/images/landscape2.jpg",
//     title: "Sunset Bliss",
//     desc: "Golden sunset over calm waters.",
//     price: 600,
//     category: "landscape",
//     artist: "Isla",
//   },
//   {
//     id: 1,
//     src: "/images/landscape1.jpg",
//     title: "City Lights",
//     desc: "Vibrant city skyline at night.",
//     price: 650,
//     category: "landscape",
//     artist: "Jack",
//   },
// ];

// const GalleryCard = ({ src, title, desc, price }) => (
//   <div className="gallery-card">
//     <img src={src} className="gallery-img" alt={title} />
//     <div className="gallery-info">
//       <h5>{title}</h5>
//       <p>{desc}</p>
//       <p className="artwork-price">${price}</p>
//       <button className="buy-button">Buy Now</button>
//     </div>
//   </div>
// );

// const GalleryPage = () => {
//   const [filteredArtworks, setFilteredArtworks] = useState(galleryData);

//   const handleSearch = ({ query, price, category, artist }) => {
//     const filtered = galleryData.filter((art) => {
//       return (
//         (query
//           ? art.title.toLowerCase().includes(query.toLowerCase())
//           : true) &&
//         (category ? art.category === category : true) &&
//         (artist
//           ? art.artist.toLowerCase().includes(artist.toLowerCase())
//           : true) &&
//         (price === "low"
//           ? art.price < 250
//           : price === "medium"
//           ? art.price >= 250 && art.price <= 500
//           : price === "high"
//           ? art.price > 500
//           : true)
//       );
//     });

//     setFilteredArtworks(filtered);
//   };

//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-title">Discover Our Art Collection</h2>
//       <SearchFilter onSearch={handleSearch} />
//       <div className="row">
//         {filteredArtworks.length > 0 ? (
//           filteredArtworks.map((item) => (
//             <GalleryCard key={item.id} {...item} />
//           ))
//         ) : (
//           <p className="no-results">No artworks found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;




import React, { useState } from "react";
import "./Gallery.css";
import SearchFilter from "./SearchFilter";

const galleryData = [
  {
    id: 10,
    src: "/images/digi3.jpg",
    title: "Forest Serenity",
    desc: "A breathtaking forest view.",
    price: 200,
    category: "landscape",
    artist: "Alice",
  },
  {
    id: 9,
    src: "/images/p4.jpg",
    title: "Mountain View",
    desc: "Snow-covered peaks.",
    price: 250,
    category: "landscape",
    artist: "Bob",
  },
  {
    id: 8,
    src: "/images/digi4.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
    price: 300,
    category: "painting",
    artist: "Charlie",
  },
  {
    id: 7,
    src: "/images/wood1.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
    price: 350,
    category: "modern",
    artist: "Diana",
  },
  {
    id: 6,
    src: "/images/p1.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
    price: 400,
    category: "painting",
    artist: "Emma",
  },
  {
    id: 5,
    src: "/images/s1.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
    price: 450,
    category: "sculpture",
    artist: "Frank",
  },
  {
    id: 4,
    src: "/images/modern2.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
    price: 500,
    category: "modern",
    artist: "Grace",
  },
  {
    id: 3,
    src: "/images/modern1.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
    price: 550,
    category: "modern",
    artist: "Hank",
  },
  {
    id: 2,
    src: "/images/landscape2.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
    price: 600,
    category: "landscape",
    artist: "Isla",
  },
  {
    id: 1,
    src: "/images/landscape1.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
    price: 650,
    category: "landscape",
    artist: "Jack",
  },
];

const GalleryCard = ({ src, title, desc, price }) => (
  <div
    className="gallery-card"
    onClick={() => console.log(`Clicked on ${title}`)}
  >
    <img src={src} className="gallery-img" alt={title} />
    <div className="gallery-info">
      <h5>{title}</h5>
      <p>{desc}</p>
      <p className="artwork-price">${price}</p>
      <button className="buy-button" onClick={() => alert(`Buying ${title}`)}>
        Buy Now
      </button>
    </div>
  </div>
);

const GalleryPage = () => {
  const [filteredArtworks, setFilteredArtworks] = useState(galleryData);

  const handleSearch = ({ query, price, category, artist }) => {
    const filtered = [...galleryData].filter((art) => {
      return (
        (query
          ? art.title.toLowerCase().includes(query.toLowerCase())
          : true) &&
        (category ? art.category === category : true) &&
        (artist
          ? art.artist.toLowerCase().includes(artist.toLowerCase())
          : true) &&
        (price === "low"
          ? art.price < 250
          : price === "medium"
          ? art.price >= 250 && art.price <= 500
          : price === "high"
          ? art.price > 500
          : true)
      );
    });

    setFilteredArtworks(filtered);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Discover Our Art Collection</h2>
      <div onClick={(e) => e.stopPropagation()}>
        <SearchFilter onSearch={handleSearch} />
      </div>
      <div className="row">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))
        ) : (
          <p className="no-results">No artworks found.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
