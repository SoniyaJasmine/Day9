import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-company">

          <div className="footer-logo">
            <div className="footer-logo-circle">
              V
            </div>

            <h2>Vetri IT Solutions</h2>
          </div>

          <p>
           Delivering innovative web, mobile, and software solutions for modern business worldwide.
          </p>

          <div className="social-icons">

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">About Us</a>
          <a href="#">Our Process</a>
          <a href="#">Portfolio</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact Us</a>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <a href="#">Website Development</a>

          <a href="#">Mobile App Development</a>

          <a href="#">Software Solutions</a>

          <a href="#">Cloud & DevOps</a>

          <a href="#">UI/UX Design</a>

        </div>


        {/* LEGAL */}

        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

          <a href="#">Cookie Policy</a>

          <a href="#">Security</a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Vetri IT Solutions. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;