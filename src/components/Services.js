import React, { useState, useEffect } from "react";
import "./Services.css";
import sample1 from './sample1.png';
import sample2 from './sample2.png';
import sample3 from './sample3.png';
import sample4 from './sample4.png';

const services = [
  {
    name: "Custom Website Development",
    image: sample1,
    description: "We specialize in crafting visually stunning and highly functional websites tailored to your business needs.",
  },
  {
    name: "E-Commerce Solutions",
    image: sample2,
    description: "Looking to take your store online? We design and develop robust e-commerce platforms to help you sell smarter and grow faster.",
  },
  {
    name: "Website Maintenance and Support",
    image: sample3,
    description: "Your website needs regular updates to stay secure and perform at its best.",
  },
  {
    name: "UI/UX Design",
    image: sample4,
    description: "First impressions matter. Our design team ensures your website not only looks great but provides an intuitive experience for your users.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Handle arrow click to navigate between services
  const handleArrowClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === services.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleCardClick = (service) => {
    setModalContent(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Only render the current service based on currentIndex */}
        <div
          className="card"
          onClick={() => handleCardClick(services[currentIndex])}
        >
          <img src={services[currentIndex].image} alt={services[currentIndex].name} />
          <p>{services[currentIndex].name}</p>
        </div>
      </div>

      {/* Arrows */}
      <img
        className="arrow left-arrow"
        src="https://i.ibb.co/7VW8mxn/image.png"
        alt="Left Arrow"
        onClick={() => handleArrowClick("left")}
      />
      <img
        className="arrow right-arrow"
        src="https://i.ibb.co/7VW8mxn/image.png"
        alt="Right Arrow"
        onClick={() => handleArrowClick("right")}
      />

      {/* Pagination Dots */}
      <div className="dots">
        {services.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalContent.name}</h2>
            <p>{modalContent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
