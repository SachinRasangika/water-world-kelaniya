// src/components/Home.js
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import './Navbar.css';
import FeatureSection from './FeatureSection';
import SliderSection from './SliderSection';
import BlogCard from './BlogCard';
import FAQSection from './FAQSection';
import Footer from './Footer';
import Gallery from './Gallery';
import Cards from './Cards';
import BlogSection from './BlogSection';
import './Theme.css';

const Home = () => {
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
      <Hero />
      <BlogCard/>
      {/* <SliderSection /> */}
      <Cards/>
      
      <Gallery/>
      <BlogSection/>
      <FAQSection/>
      {/* <FeatureSection/> */}
      
      <Footer/>
      
    
    </div>
  );
};

export default Home;
