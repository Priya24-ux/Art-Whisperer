

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";

// function App() {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       {/* Navbar at the top */}
//       <Navbar />

//       {/* Main Content - Dynamic Pages */}
//       <main className="flex-grow-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

     
//       {/* Footer at the bottom */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css"; // Import global CSS (optional)

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? "" : "hide-navbar-bg"}>
      {/* Navbar */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

export default App;


// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   return (
//     <div className={isHomePage ? "" : "hide-navbar-bg"}>
//       <Navbar />

//       <main className="flex-grow-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;



