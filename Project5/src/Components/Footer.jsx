import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/Images/Copy of download__23_-removebg-preview.png";
import insta from "../assets/Images/instagram-mobile-app-logo-instagram-app-icon-ig-app-free-free-vector.jpg";
import fb from "../assets/Images/facebook.png";
import utube from "../assets/Images/youtube.png";
import wapp from "../assets/Images/whatsapp-.webp";

function Footer() {
return (

<footer className="footer">

  <div className="footer-main">

    {/* Logo */}
    <div className="footer-brand">

      <img
        src={logo}
        alt="Wedding Invitation"
      />

      <p>
        Largest Wedding Cards Collections in Chennai
      </p>

      <div className="social-icons">
        <p>Follow us with</p>
        <a href="#" aria-label="Facebook">
          <img src={insta} alt="Facebook" />
        </a>

        <a href="#" aria-label="Instagram">
          <img src={fb} alt="Instagram" />
        </a>

        <a href="#" aria-label="YouTube">
          <img src={utube} alt="YouTube" />
        </a>

        <a href="#" aria-label="WhatsApp">
          <img src={wapp} alt="WhatsApp" />
        </a>

      </div>

    </div>


    {/* Information */}
    <div className="footer-column">

      <h3>Information</h3>

      <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/how-to-order">
            How to order wedding invitation
            online?
          </Link>

    </div>


    {/* Quick Access */}
    <div className="footer-column">

      <h3>Quick Access</h3>

       <Link to="/">
            Home
          </Link>

          <Link to="/wedding-cards">
            Wedding Cards
          </Link>

          <Link to="/hindu-wedding-cards">
            Hindu Wedding Cards
          </Link>

    </div>


    {/* Contact */}
    <div className="footer-column">

      <h3>Contact Us</h3>
          <p>📞 +91 9876543210</p>
          <p>✉️ wedtype@weddingcards.com</p>
          <p>Operating hours: 10.00Am to 10.00Pm</p>
          <p><strong>Monday - Sunday</strong></p>

    </div>

  </div>


  {/* Copyright */}
  <div className="footer-bottom">

    <p>
      © Wed knot craft India Private Limited. All Rights Reserved.
    </p>

  </div>

</footer>

)}

export default Footer;