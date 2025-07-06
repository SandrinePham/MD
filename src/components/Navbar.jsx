import { NavLink } from "react-router-dom";
import "./Navbar.scss"; // Assuming you have a Navbar.scss file for styles

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        À Propos
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blog
      </NavLink>
    </nav>
  );
}

export default Navbar;
