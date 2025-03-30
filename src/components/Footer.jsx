// import React from "react";
// import "./Footer.css"; // Footer styles
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Social Icons

// const Footer = () => {
//   return (
//     <footer className="art-footer">
//       <div className="cart-container">
//         <div className="cart-basket">
//           <div className="footer-content">
//             <h2>ArtHaven 🎨</h2>
//             <p>Where creativity meets collectors.</p>
//             <nav className="footer-nav">
//               <a href="/about">About</a>
//               <a href="/collections">Collections</a>
//               <a href="/contact">Contact</a>
//             </nav>
//             <div className="social-icons">
//               <FaInstagram />
//               <FaFacebook />
//               <FaTwitter />
//             </div>
//           </div>
//         </div>
//         <div className="cart-wheels">
//           <div className="wheel"></div>
//           <div className="wheel"></div>
//         </div>
//       </div>
//       <p className="copyright">© 2025 ArtHaven. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import "./Footer.css";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import paintbrush from "../assets/paintbrush.png"; // Add your paintbrush image

// const Footer = () => {
//   return (
//     <footer className="art-footer">
//       <div className="footer-content">
//         <h2>ArtHaven 🎨</h2>
//         <p>Discover, collect, and embrace creativity.</p>
//         <nav className="footer-nav">
//           <a href="/about">About</a>
//           <a href="/collections">Collections</a>
//           <a href="/contact">Contact</a>
//         </nav>
//         <div className="social-icons">
//           <FaInstagram />
//           <FaFacebook />
//           <FaTwitter />
//         </div>
//       </div>
//       <img src={paintbrush} alt="Paintbrush" className="paintbrush" />
//       <p className="copyright">© 2025 ArtHaven. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;








// import { Link } from "react-router-dom";
// import { Mail, Instagram, Linkedin } from "lucide-react";
// // import paintbrush from "/images/paintbrush.png"; // Ensure correct path


// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light text-center py-4 ">
//       <div className="container">
//         {/* Brand Name & Tagline */}
//         <h2 className="fw-semibold">ArtHaven 🎨</h2>
//         <p className="text-secondary">
//           Discover, collect, and embrace creativity.
//         </p>

//         {/* Navigation Links */}
//         <nav className="d-flex justify-content-center gap-4 mt-3">
//           <Link to="/about" className="text-light text-decoration-none">
//             About
//           </Link>
//           <Link to="/collections" className="text-light text-decoration-none">
//             Collections
//           </Link>
//           <Link to="/contact" className="text-light text-decoration-none">
//             Contact
//           </Link>
//         </nav>

//         {/* Social Media Icons */}
//         <div className="d-flex justify-content-center gap-3 mt-3">
//           <a href="mailto:cgumarketplace@gmail.com" className="text-light">
//             <Mail size={20} />
//           </a>
//           <a href="https://instagram.com/cgumarketplace" className="text-light">
//             <Instagram size={20} />
//           </a>
//           <a
//             href="https://www.linkedin.com/company/cgu-marketplace/"
//             className="text-light"
//           >
//             <Linkedin size={20} />
//           </a>
//         </div>

//         {/* Paintbrush Image */}
//         <img
//           src="/images/paintbrush.png"
//           alt="Paintbrush"
//           className="img-fluid mt-4"
//           style={{ width: "100px", opacity: "0.8", marginTop: "10px" }}
//         />

//         {/* Copyright Text */}
//         <p className="text-secondary mt-2 small">
//           &copy; {new Date().getFullYear()} ArtHaven. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// import { Link } from "react-router-dom";
// import { Mail, Instagram, Linkedin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light text-center py-4">
//       <div className="container">
//         {/* Brand Name & Tagline */}
//         <h2 className="fw-semibold">ArtHaven 🎨</h2>
//         <p className="text-secondary">
//           Discover, collect, and embrace creativity.
//         </p>

//         {/* Navigation Links & Social Icons in Same Line */}
//         <div className="footer-links d-flex justify-content-center align-items-center gap-4 mt-3">
//           {/* Navigation Links */}
//           <nav className="d-flex gap-3">
//             <Link to="/about" className="text-light text-decoration-none">
//               About
//             </Link>
//             <Link to="/collections" className="text-light text-decoration-none">
//               Collections
//             </Link>
//             <Link to="/contact" className="text-light text-decoration-none">
//               Contact
//             </Link>
//           </nav>

//           {/* Space between navigation links and icons */}
//           <div style={{ width: "900px" }}></div>

//           {/* Social Media Icons */}
//           <div className="d-flex gap-3">
//             <a href="mailto:cgumarketplace@gmail.com" className="text-light">
//               <Mail size={20} />
//             </a>
//             <a
//               href="https://instagram.com/cgumarketplace"
//               className="text-light"
//             >
//               <Instagram size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/cgu-marketplace/"
//               className="text-light"
//             >
//               <Linkedin size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Paintbrush Image */}
//         <img
//           src="/images/paintbrush.png"
//           alt="Paintbrush"
//           className="img-fluid"
//           style={{ width: "100px", opacity: "0.8", marginTop: "10px" }}
//         />

//         {/* Copyright Text */}
//         <p className="text-secondary mt-2 small">
//           &copy; {new Date().getFullYear()} ArtHaven. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import { Link } from "react-router-dom";
import { Mail, Instagram, Linkedin,Twitter, Facebook} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        {/* First Line: Brand, Links, and Icons */}
        <div className="footer-top d-flex justify-content-between align-items-center flex-wrap">
          {/* Brand Name */}
          <h2 className="fw-semibold m-0">ArtHaven 🎨</h2>

          {/* Navigation Links */}
          <nav className="d-flex gap-4">
            <Link to="/about" className="text-light text-decoration-none">
              About
            </Link>
            <Link to="/collections" className="text-light text-decoration-none">
              Collections
            </Link>
            <Link to="/contact" className="text-light text-decoration-none">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="d-flex gap-3">
            <a href="mailto:cgumarketplace@gmail.com" className="text-light">
              <Mail size={20} />
            </a>
            <a
              href="https://instagram.com/cgumarketplace"
              className="text-light"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/cgu-marketplace/"
              className="text-light"
            >
              <Linkedin size={20} />
            </a>

            <a href="https://twitter.com/cgumarketplace" className="text-light">
              <Twitter size={20} />
            </a>
            <a
              href="https://facebook.com/cgumarketplace"
              className="text-light"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Second Line: Tagline */}
        <p className="text-secondary mt-3">
          Discover, collect, and embrace creativity.
        </p>

        {/* Paintbrush Image */}
        {/* <img
          src="/images/image.png"
          alt="Paintbrush"
          className="img-fluid mt-3"
          style={{ width: "100px", opacity: "0.8" }}
        /> */}

        {/* Copyright Text */}
        <p className="text-secondary mt-2 small">
          &copy; {new Date().getFullYear()} ArtHaven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;




