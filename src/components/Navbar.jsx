
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css"; // Import the CSS file

const MyNavbar = () => {
  const images = [
    "/images/image1.jpg",
    "/images/i.jpg",
    "/images/image2.jpg",
  ]; // Replace with actual image URLs

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand
            // href="/"
            as={Link}
            to="/"
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              fontFamily: "'Cinzel', serif",
              color: "#FFD700",
            }}
          >
            🎨Art Whisperer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
             

              <Nav.Link as={Link} to="/" style={{ fontSize: "1.2rem" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={{ fontSize: "1.2rem" }}>
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ fontSize: "1.2rem" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="navbar-background"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
       
      </div>
    </>
  );
};
export default MyNavbar;





// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

// const MyNavbar = () => {
//   const images = ["/images/image1.jpg", "/images/i.jpg", "/images/image2.jpg"]; // Replace with actual image URLs

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 4000); // Change background every 4 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <Navbar
//       bg="dark"
//       variant="dark"
//       expand="lg"
//       fixed="top"
//       className="custom-navbar"
//     >
//       {/* Background Image Inside Navbar */}
//       <div
//         className="navbar-background"
//         style={{ backgroundImage: `url(${images[currentImage]})` }}
//       ></div>

//       <Container>
//         <Navbar.Brand as={Link} to="/" className="navbar-title">
//           🎨Art Whisperer
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/" className="nav-link-custom">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/gallery" className="nav-link-custom">
//               Gallery
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" className="nav-link-custom">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;
