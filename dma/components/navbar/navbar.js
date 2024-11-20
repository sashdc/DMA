"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Class List", path: "/schedule" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="navbar bg-light py-0 d-flex flex-column">
      <div className="navbar-social">
        <div className="d-flex flex-column align-items-center ms-4">
          <div className="d-flex mb-2">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="me-3"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </div>
          <div className="d-flex">
            <Link href="/register">
              <button className="btn btn-danger me-2 btn-sm">Register</button>
            </Link>
            <Link href="/login">
              <button className="btn btn-success btn-sm">Log In</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="containear d-flex justify-content-between align-items-center">
        {/* Left Nav Links */}
        <div className="d-flex">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`nav-link mx-3 ${
                pathname === item.path ? "active-link" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="navbar-brand mx-auto">
          <img
            src="/dma_logo.png"
            alt="DMA Logo"
            style={{ height: "100px", objectFit: "contain" }}
          />
        </Link>

        {/* Right Nav Links */}
        <div className="d-flex">
          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`nav-link mx-3 ${
                pathname === item.path ? "active-link" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons and Buttons */}
      </div>
    </nav>
  );
};

export default Navbar;
