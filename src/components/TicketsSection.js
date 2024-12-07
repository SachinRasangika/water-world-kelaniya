import React, { useState } from 'react';
import './TicketsSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from "react-icons/io";

const ticketsData = [
  {
    category: 'Water World Bird Park and Under Water Tunnel (Locals)',
    cards: [
      {
        title: 'Adult Ticket',
        price: 'Rs.750/=',
        description: ['Water World Bird Park Underwater Tunnel'],
      },
      {
        title: 'Children Tickets',
        price: 'Rs.500/=',
        description: ['Water World Bird Park Underwater Tunnel'],
      },
    ],
  },
  {
    category: 'Full Package',
    cards: [
      {
        title: 'Adult Ticket',
        price: 'Rs.1100/=',
        description: ['River Safari', 'Water World Bird Park', 'Underwater Tunnel'],
      },
      {
        title: 'Children Tickets',
        price: 'Rs.750/=',
        description: ['River Safari', 'Water World Bird Park', 'Underwater Tunnel'],
      },
    ],
  },
  {
    category: 'School and Pre School - Special Package',
    cards: [
      {
        title: 'THE School Children',
        price: 'Rs.250/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• All school children should be in their school uniforms. A minimum of 10 students should be there in a group. The discount package will not be eligible for tuition classes and children\'s societies.',
          '• Who eligible for this package? Click Here'
        ],
      },
      {
        title: 'THE School Visits - Parents',
        price: 'Rs.450/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• All parents who accompany children in their school visits.',
          '• Who eligible for this package? Click Here'
        ],
      },
      {
        title: 'THE Other Children Under 12',
        price: 'Rs.300/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• All other children without school uniforms (under 12 years) who come with school visits.',
          '• Who eligible for this package? Click Here'
        ],
      },
      {
        title: 'THE School Teachers',
        price: 'Free',
        description: [
          '• Who eligible for this package? Click Here',
          <IoMdCheckmarkCircle />, ' Two teachers will be given free admission for every 25 students.'
        ],
      },
    ],
  },
  {
    category: 'Special Package - Large Groups - Half Package',
    cards: [
      {
        title: 'HALF PACKAGE Large Group Adult',
        price: 'Rs.650/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• A large group of visitors that comprises of 25 adults or more.',
          '• Who eligible for this package? Click Here'
        ],
      },
      {
        title: 'HALF PACKAGE Large Group Children',
        price: 'Rs.400/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• Any number of children under 12 years of age that accompany a large group of adults comprising of 25 or more adults or A group of children under 12 years of age that comes in a group of 25 or more numbers.',
          '• Who eligible for this package? Click Here'
        ],
      },
    ],
  },
  {
    category: 'Special Package - Large Groups - Full Package',
    cards: [
      {
        title: 'FULL PACKAGE Large Group Adult',
        price: 'Rs.950/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• River Safari',
          '• A large group of visitors that comprises of 25 adults or more.',
          '• Who eligible for this package? Click Here'
        ],
      },
      {
        title: 'FULL PACKAGE Large Group Children',
        price: 'Rs.650/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• River Safari',
          '• Any number of children under 12 years of age that accompany a large group of adults comprising of 25 or more adults or A group of children under 12 years of age that comes in a group of 25 or more numbers.',
          '• Who eligible for this package? Click Here'
        ],
      },
    ],
  },
  {
    category: 'Foreigners Tickets - Full Package',
    cards: [
      {
        title: 'THE Adult',
        price: 'Rs.2000/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• River Safari'
        ],
      },
      {
        title: 'THE Children',
        price: 'Rs.1400/=',
        description: [
          '• Water World',
          '• Bird Park',
          '• Underwater Tunnel',
          '• River Safari'
        ],
      },
    ],
  },
];

const TicketsSection = () => {
  const [activeIndexes, setActiveIndexes] = useState(Array(ticketsData.length).fill(null));

  const toggleDescription = (categoryIndex, ticketIndex) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[categoryIndex] = newActiveIndexes[categoryIndex] === ticketIndex ? null : ticketIndex;
    setActiveIndexes(newActiveIndexes);
  };

  return (
    <section className="tickets-section">
      {ticketsData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category">
          <h2 className="section-heading">{category.category}</h2>
          <div className="price-table">
            {category.cards.map((ticket, ticketIndex) => (
              <div
                key={ticketIndex}
                className={`price-card ${activeIndexes[categoryIndex] === ticketIndex ? 'active' : ''}`}
                onClick={() => toggleDescription(categoryIndex, ticketIndex)}
              >
                <div className="price-card-header">
                  <h3 className="price-card-title">{ticket.title}</h3>
                  <div className="price-card-right">
                    <span className="price-card-price">{ticket.price}</span>
                    {activeIndexes[categoryIndex] === ticketIndex ? (
                      <FaChevronUp className="price-card-icon" />
                    ) : (
                      <FaChevronDown className="price-card-icon" />
                    )}
                  </div>
                </div>
                {activeIndexes[categoryIndex] === ticketIndex && (
                  <div className="price-card-description">
                    {ticket.description.map((desc, descIndex) => (
                      <p key={descIndex}>
                        {typeof desc === 'string' ? desc : desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TicketsSection;
