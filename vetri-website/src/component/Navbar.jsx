import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/images/Group 469.png"

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/solution">
          Solution
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>

      {/* CTA */}
      <button className="nav-button">
        Get Consultation
      </button>
    </nav>
  );
}

export default Navbar;