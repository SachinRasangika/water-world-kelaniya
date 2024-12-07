import React, { useState,useEffect } from 'react';
import './Hero.css';
import './Theme.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // AOS CSS file

const Hero = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <div className="hero">
      {!videoPlaying && (
        <div className="hero-background-image"></div>
      )}
      {videoPlaying && (
        <video className="hero-video" autoPlay loop>
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
      )}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">Welcome to Water World Kelaniya</h1>
        <p className="hero-description" data-aos="fade-up">Water World is an aquatic wonderland which is home to a diverse collection of over 500 varieties of fish.</p>
        <div className="hero-buttons" data-aos="fade-up">
          <button onClick={toggleVideo} className="hero-button">
            {videoPlaying ? 'END JOURNEYS' : 'JOURNEYS'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
