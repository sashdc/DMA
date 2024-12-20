'use client'; 

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [text, setText] = useState("I CAN");
  const [index, setIndex] = useState(0);
  const phrases = ["I CAN", "I WILL"];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayAfterTyping = 2000; // Delay after completing a word

    const handleTyping = () => {
      const currentPhrase = phrases[index];
      const updatedText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1);

      setText(updatedText);

      // If word is completely typed or deleted
      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, phrases]);

  return (
    <footer className="footer">
      {/* Left Side: Animated Text */}
      <div className="footer-animation">
        <div className="typewriter-text">{text}</div>
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
        <div className="footer-row footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/schedule">Class List</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className="footer-row">
          <p id="copyright">
            &copy; 2024 Determination Martial Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
