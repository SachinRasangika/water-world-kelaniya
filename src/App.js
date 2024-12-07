// src/App.js
import React, { useEffect } from 'react'; // Import useEffect from React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AOS from 'aos'; // Import AOS from aos module
import 'aos/dist/aos.css';
import './App.css';
import BuyTickets from './components/BuyTickets';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy-tickets" element={<BuyTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
