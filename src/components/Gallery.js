import React, { useState, useEffect } from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { src: 'https://img.freepik.com/premium-photo/large-beautiful-round-glass-tunnel-water-aquarium-with-different-fish-concept-tourism_75563-11835.jpg', alt: 'Image 1' },
  { src: 'https://www.wondergifts.ae/cdn/shop/files/Dubai_20Aquarium_20_20Underwater_20Zoo_20General_20Admission_20for_20One_206_axgr2v_950x594_2cf3196c-a32a-4767-ac58-13eebdb04e41_950x594.webp?v=1719013876', alt: 'Image 2' },
  { src: 'https://updaterdaily.com/wp-content/uploads/2023/04/image00012.jpeg.webp', alt: 'Image 3' },
  { src: 'https://underwaterzone.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-15-at-08.49.43.jpeg', alt: 'Image 4' },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFading, setIsFading] = useState(false);

  const handleImageChange = (image) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedImage(image);
      setIsFading(false);
    }, 500); // Match the transition duration in CSS
  };

  return (
    <div className="gallery-heading">
      <h2>Gallery</h2>
      <div className="gallery-container">
        <div className="selected-image">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className={isFading ? 'fade-out' : 'fade-in'}
          />
        </div>
        <div className="thumbnail-container" data-aos="zoom-in">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === image ? 'active' : 'floating'}`}
              onClick={() => handleImageChange(image)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
