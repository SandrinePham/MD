import "./footer.scss";
import logo from "../assets/logo/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="Logo de Mélanie Dizet" className="footer-logo" />
        <p className="footer-text">© Copyright 2025 | Mélanie DIZET</p>
      </div>
    </footer>
  );
}

export default Footer;
