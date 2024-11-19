import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Navigation Links */}
        <ul className="footer-links">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/schedule">Class List</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Determination Martial Arts</p>
      </div>
    </footer>
  );
};

export default Footer;
