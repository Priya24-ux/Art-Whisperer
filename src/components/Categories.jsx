

// export default Categories;
import { Link } from "react-router-dom";
import "./Categories.css"; // Ensure you import your CSS file

const Categories = () => {
  return (
    <div className="explore-section">
      <h2
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "2.1rem",
          fontWeight: "550",
          letterSpacing: "1px",
          color: "#D4AF37",
          marginTop: "40px", // Adds space above
          textAlign: "center",
        }}
      >
        <span className="explore-box">Explore</span>
      </h2>

      <div className="categories-container">
        <Link to="paintings" className="category-item">
          <div className="category-content">
            <img
              src="/images/painting.jpg"
              alt="Paintings"
              className="category-image"
            />
            <p className="category-text">Paintings</p>
          </div>
        </Link>

        <Link to="paintings" className="category-item">
          <div className="category-content">
            <img
              src="/images/woodArt.png"
              alt="wood-art"
              className="category-image"
            />
            <p className="category-text">Wood Art</p>
          </div>
        </Link>

        <Link to="/digital-art" className="category-item">
          <div className="category-content">
            <img
              src="/images/digitalArt.png"
              alt="Digital Art"
              className="category-image"
            />
            <p className="category-text">Digital Art</p>
          </div>
        </Link>

        <Link to="/sculptures" className="category-item">
          <div className="category-content">
            <img
              src="/images/sculptures.png"
              alt="Sculptures"
              className="category-image"
            />
            <p className="category-text">Sculptures</p>
          </div>
        </Link>

        <Link to="/photography" className="category-item">
          <div className="category-content">
            <img
              src="/images/photography.png"
              alt="Photography"
              className="category-image"
            />
            <p className="category-text">Photography</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
