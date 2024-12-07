import React, { useEffect } from 'react';
import './BlogSection.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // AOS CSS file


const BlogSection = () => {
  const blogPosts = [
    {
      date: '15.06.2005',
      image: 'https://srilankafinder.com/wp-content/uploads/2017/10/water-world-lanka-2-700x500.jpg', // Replace with actual image path
      title: 'Business with Angels - Daily News',
      description: 'Explore the fascinating world of business with angels.',
      details: 'Read more'
    },
    {
      date: '06.04.2013',
      image: 'https://srilankafinder.com/wp-content/uploads/2017/10/water-world-lanka-2-700x500.jpg', // Replace with actual image path
      title: 'Water World Fish Picture Gallery',
      description: 'A gallery showcasing a variety of fish at Water World.',
      details: 'Read more'
    },
    {
      date: '19.03.2013',
      image: 'https://srilankafinder.com/wp-content/uploads/2017/10/water-world-lanka-2-700x500.jpg', // Replace with actual image path
      title: 'Water World First Bird Park in Sri Lanka',
      description: 'Discover the first bird park in Sri Lanka at Water World.',
      details: 'Read more'
    },
    {
      date: '19.03.2013',
      image: 'https://srilankafinder.com/wp-content/uploads/2017/10/water-world-lanka-2-700x500.jpg', // Replace with actual image path
      title: 'Water World Kelaniya, Only Public Aquarium in Sri Lanka',
      description: 'Visit the only public aquarium in Sri Lanka, located in Kelaniya.',
      details: 'Read more'
    }
  ];

  return (
    <section className="blog-section">
      <h2 className="section-title" >Latest Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <div className="blog-item" data-aos="fade-up" key={index}>
          <div className="blog-date">{post.date}</div>
          <img src={post.image} alt={post.title} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
            <a href="#" className="blog-details">Read More</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
