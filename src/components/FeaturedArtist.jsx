


import React, { useEffect, useRef } from "react";
import "./FeaturedArtist.css"; // Import the updated CSS

const FeaturedArtist = () => {
  const artistRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    artistRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      artistRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="featured-artist-section">
      <h2 className="section-title">Our Featured Artists</h2>

      <div
        className="artist-card right"
        ref={(el) => (artistRefs.current[0] = el)}
      >
        <img
          src="/images/artist1.jpg"
          alt="John Doe"
          className="artist-image"
        />
        <div className="artist-info">
          <h3>John Doe</h3>
          <p>
            John Doe is an award-winning contemporary artist known for his
            vibrant and expressive paintings.
          </p>
        </div>
      </div>

      <div
        className="artist-card left"
        ref={(el) => (artistRefs.current[1] = el)}
      >
        <img
          src="/images/artist2.jpg"
          alt="Emily Smith"
          className="artist-image"
        />
        <div className="artist-info">
          <h3>Emily Smith</h3>
          <p>
            Emily Smith creates mesmerizing digital art that blends surrealism
            with modern techniques.
          </p>
        </div>
      </div>

      <div
        className="artist-card right"
        ref={(el) => (artistRefs.current[2] = el)}
      >
        <img
          src="/images/artist3.jpg"
          alt="Michael Lee"
          className="artist-image"
        />
        <div className="artist-info">
          <h3>Michael Lee</h3>
          <p>
            Michael Lee is a sculptor and painter specializing in contemporary
            abstract artwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtist;

