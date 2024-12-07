import React, { useState, useEffect } from 'react';
import './FAQSection.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // AOS CSS file
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import the icons

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'What are the opening hours of the Aquatic Park?',
      answer: 'The Aquatic Park is open from [opening time] to [closing time] on weekdays, and from [opening time] to [closing time] on weekends.',
    },
    {
      question: 'How can I purchase tickets for the Aquatic Park?',
      answer: 'Tickets can be purchased online through our website or at the park entrance.',
    },
    {
      question: 'Are there any age restrictions for visitors?',
      answer: 'There are no age restrictions, but children must be accompanied by an adult.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <section className="faq-section">
      <div className="section-content">
        <h2 className="section-title">Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div className="faq-item" data-aos="zoom-in" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
