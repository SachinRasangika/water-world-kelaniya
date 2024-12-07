import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import './FeatureSection.css';

const FeatureSection = () => {
  useEffect(() => {
    // Load the YouTube API script dynamically
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Ensure the API script is loaded before initializing the player
    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      // Clean up by removing the global callback
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const initializePlayer = () => {
    // Options for the YouTube player
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        playsinline: 1,
      },
    };

    // Create a new YouTube player
    new window.YT.Player('youtube-player', opts);
  };

  return (
    <section className="feature-section">
      <div className="video-wrapper">
        <div id="youtube-player" className="youtube-video"></div>
      </div>
    </section>
  );
};

export default FeatureSection;
