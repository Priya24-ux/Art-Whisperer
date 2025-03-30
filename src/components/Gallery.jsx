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





import React from "react";
import "./Gallery.css";

const galleryData = [
  {
    id: 1,
    src: "/images/landscape1.jpg",
    title: "Forest Serenity",
    desc: "A breathtaking forest view.",
  },
  {
    id: 2,
    src: "/images/landscape2.jpg",
    title: "Mountain View",
    desc: "Snow-covered peaks under the sky.",
  },
  {
    id: 3,
    src: "/images/modern1.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
  },
  {
    id: 4, // Fixed duplicate ID
    src: "/images/modern2.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
  },

  {
    id: 5,
    src: "/images/abstract1.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
  },
  {
    id: 6, // Fixed duplicate ID
    src: "/images/abstract2.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
  },

  {
    id: 7,
    src: "/images/artist1-land.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
  },
  {
    id: 8, // Fixed duplicate ID
    src: "/images/artist1-land2.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
  },
  {
    id: 9,
    src: "/images/artist1-land.jpg",
    title: "Sunset Bliss",
    desc: "Golden sunset over calm waters.",
  },
  {
    id: 10, // Fixed duplicate ID
    src: "/images/artist1-land2.jpg",
    title: "City Lights",
    desc: "Vibrant city skyline at night.",
  },
];

const GalleryCard = ({ src, title, desc }) => {
  return (
    <div className="gallery-card">
      <img src={src} className="gallery-img" alt={title} />
      <div className="gallery-info">
        <h5>{title}</h5>
        <p>{desc}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Discover Our Art Collection</h2>
      <div className="row">
        {galleryData.map((item) => (
          <GalleryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
