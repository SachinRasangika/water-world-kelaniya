// src/components/BuyTickets.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroBuyTickets from './HeroBuyTickets'; // Updated import statement
import TicketsSection from './TicketsSection';
import './Navbar.css';
import './Theme.css';

const BuyTickets = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar scrolled={scrolled} />
      <HeroBuyTickets /> {/* Updated component name */}
      <div className="buy-tickets-container">
        <TicketsSection />
      </div>
      <Footer />
    </div>
  );
};

export default BuyTickets;
