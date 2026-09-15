import {NavLink } from "react-router-dom";

function NavBar() {

return (
    <header className="navbar">
        <div className="logo">
            <img src="src/assets/Construction Website/ChatGPT Image Mar 2, 2026, 12_14_05 PM.png" alt="Logo" />
        </div>
        <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="btn-border">
            <button className="consultation-btn">Free Consultation </button>
            <span>›</span>
        </div>
    </header>
);
}

export default NavBar;