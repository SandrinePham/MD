import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./header.scss";
import logo from "../assets/logo/logo_100.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="headerContent">
          <div className="header-image-container">
            <img
              src={logo}
              alt="Logo de Mélanie Dizet"
              className="header-logo"
            />
          </div>
          <Navbar />
        </div>
      </header>
      <div className="header-bottom-bar"> </div>
    </>
  );
}

export default Header;
