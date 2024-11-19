import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer d-flex">
      {/* Left Side: Animated Text */}
      <div className="footer-animation">
  <div className="animated-text">I CAN</div>
  <div className="animated-text">I WILL</div>
</div>


      {/* Right Side: Details */}
      <div className="footer-details">
        <div className="footer-row">
          <div className="footer-social">
            <a
              href="https://www.facebook.com/DeterminationMartialArts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/determinationmartialarts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="contact-info">
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-row">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-row">
          <p>&copy; 2024 Determination Martial Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
