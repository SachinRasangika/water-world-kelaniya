import React from 'react';
import './SliderSection.css';

const SliderSection = () => {
  return (
    <div className="slider-section">
      <div className="card">
        <img src="/images/foot.png" alt="Card Image" className="card-img" />
        <div className="card-content">
          <h2 className="card-heading">Card Heading</h2>
          <p className="card-details">Card Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="path_to_image" alt="Card Image" className="card-img" />
        <div className="card-content">
          <h2 className="card-heading">Card Heading</h2>
          <p className="card-details">Card Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="path_to_image" alt="Card Image" className="card-img" />
        <div className="card-content">
          <h2 className="card-heading">Card Heading</h2>
          <p className="card-details">Card Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="path_to_image" alt="Card Image" className="card-img" />
        <div className="card-content">
          <h2 className="card-heading">Card Heading</h2>
          <p className="card-details">Card Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
