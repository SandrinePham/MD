import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function Navbar() {
  return (
    <nav className="menu">
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
        to="/prestations"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Prestations
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
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
