'use client';

// components/Navbar.js

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', path: '/about' },
      { name: 'Class List', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Icon Placeholder */}
        <Link href="/" className="navbar-brand">
          <img
            src="/dma_logo.png"
            alt="DMA Logo"
            style={{ width: 'auto', height: '80px' }}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item ${
                  pathname === item.path ? 'active' : ''
                }`}
              >
                <Link
                  href={item.path}
                  className={`nav-link ${
                    pathname === item.path ? 'active-link' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="d-flex align-items-center me-3">
            <Link href="https://www.facebook.com" target="_blank" className="me-3">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </div>

          {/* Buttons */}
          <div className="d-flex">
            <Link href="/register">
              <button className="btn btn-danger me-2">Register</button>
            </Link>
            <Link href="/login">
              <button className="btn btn-success">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
