import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Water World Lanka<br />
            No: 95, Biyagama Road,<br />
            Thalwatta, Kelaniya,<br />
            Sri Lanka
          </p>
          <p>Phone: +94 112 269 226</p>
          <p>Email: waterworldkelaniya@gmail.com</p>
        </div>
        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p>Sign up for our newsletter. Your e-mail addresses will not be shared with others.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Sign Up</button>
          </form>
          <div className="footer-social">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Latest Blog Posts</h3>
          <ul className="latest-posts">
            <li><a href="#">Business with Angels - Daily News - 2005/06/15</a></li>
            <li><a href="#">Water World Fish Picture Gallery - SATURDAY, APRIL 6, 2013</a></li>
            <li><a href="#">Water World First Bird Park in Sri Lanka - TUESDAY, MARCH 19, 2013</a></li>
            <li><a href="#">Water World Kelaniya, Only Public Aquarium in Sri Lanka - TUESDAY, MARCH 19, 2013</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>COPYRIGHT © 2024. ALL RIGHTS RESERVED. WEBSITE DESIGN BY Sachin RS</p>
      </div>
    </footer>
  );
};

export default Footer;
