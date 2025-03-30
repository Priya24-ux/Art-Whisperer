import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css"; // Import global CSS (optional)


import Categories from "./components/Categories";



import Paintings from "./components/Paintings"; // Import category pages
// import WoodArt from "./components/WoodArt"; 
import WoodArt from "./components/WoodArt";

import DigitalArt from "./components/DigitalArt";
import Sculptures from "./components/Sculptures";

import Photography from "./components/Photography";

import TrendingArtworks from "./components/TrendingArtworks";
import ArtworkDetails from "./components/ArtworkDetails";



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

          <Route path="/paintings" element={<Paintings />} />

          <Route path="/" element={<Categories />} />
          <Route path="/wood-art" element={<WoodArt />} />

          <Route path="/digital-art" element={<DigitalArt />} />
          <Route path="/sculptures" element={<Sculptures />} />

          <Route path="/photography" element={<Photography />} />

          <Route path="/" element={<TrendingArtworks />} />
          <Route path="/artwork/:id" element={<ArtworkDetails />} />
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

