import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Education Visits</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Buy Tickets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Location</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
