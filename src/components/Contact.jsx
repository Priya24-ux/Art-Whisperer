// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <p>Email: contact@artwhisperer.com</p>
//       <p>Phone: +123 456 7890</p>
//     </div>
//   );
// };

// export default Contact;




import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-content">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        {/* <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> support@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Address:</strong> 123 Art Street, New York, USA
          </p>
        </div> */}

        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>
            <i className="fas fa-envelope"></i> Email: support@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: +1 234 567 890
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Address: 123 Art Street,
            New York, USA
          </p>

          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
