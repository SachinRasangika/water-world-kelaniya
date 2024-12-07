// src/components/BlogCard.js
import React, { useEffect } from 'react';
import './BlogCard.css'; // Ensure you have a corresponding CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // AOS CSS file

const BlogCard = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const blogData = {
    title: "Water World Kelaniya",
    description: "Water World Lanka is one of Kelaniya’s most popular attractions and is home to South Asia’s first underwater tunnel aquarium. Located along Kelani River, the aquarium is home to a collection of over 500 fish species from all around the world including rare black diamond stingrays. You can even view piranha feedings and live shark dives. There's also a bird park that houses the world’s first aviary-themed river safari. Tickets include entry to the aquarium, bird park and underwater tunnel, and there are special concessions for large groups.",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/29/09/f1/water-world-lanka.jpg?w=1200&h=1200&s=1", // Replace with your actual image path
    linkText: "See More",
    linkUrl: "#"
  };

  return (
    <div className="blog-card">
      <img src={blogData.imageUrl} alt={blogData.title} className="blog-card-image" data-aos="zoom-in" />
      <div className="blog-card-content">
        <h2 data-aos="fade-up">{blogData.title}</h2>
        <p data-aos="fade-up">{blogData.description}</p>
        <a href={blogData.linkUrl} className="blog-card-link" data-aos="fade-up">{blogData.linkText}</a>
      </div>
    </div>
  );
};

export default BlogCard;
