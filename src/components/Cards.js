import React, { useEffect } from 'react'; // Import useEffect from react
import './Cards.css'; // Import the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const items = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image path
      title: 'Water World',
      description: 'Welcome to Water World Kelaniya, the only public aquarium in Sri Lanka! Located on a scenic 5 acre property on the banks of the Kelani River,',
      link: '#', // Replace with actual link for "read more"
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/14379879/pexels-photo-14379879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Bird Park',
      description: 'Welcome to the first Bird Park in Sri Lanka, home to a breathtakingly splendid collection of feathered friends from regions around the world ',
      link: '#',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/originals/f8/ef/49/f8ef49d454a48a49544338410a0acaea.jpg',
      title: 'Underwater Tunnel',
      description: 'Welcome to the first “Under Water Tunnel Aquarium” in South Asia. Immerse yourself in the breathtakingly beautiful under water life and witness',
      link: '#',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/9244238/pexels-photo-9244238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'River Safari Sri Lanka',
      description: 'River Safari Sri Lanka is the worlds first aviary themed boat safari ride. Embark on an unforgettable boat adventure into the rivers of the world.',
      link: '#',
    },
  ];

  return (
    <div className="card-section">
      <h2  className="section-heading">Featured Cards</h2>
      <div className="item-container" data-aos="fade-up">
        {items.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <div className="item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className='linkButton' href={item.link}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
