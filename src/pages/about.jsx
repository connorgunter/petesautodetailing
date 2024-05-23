import React, { useState } from 'react';
import "../css/about.css"
const images = [
  '../images/image2.jpg',
  '../images/image5.jpg',
  '../images/image7.jpg',
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='about' id="about">
    <div className="slideshow-container">
      <button onClick={goToPrevSlide}>&larr;</button>
      <img className="slideshow-img" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={goToNextSlide}>&rarr;</button>
    </div>
      <div>
        <p>Here at Petes Detailing, we prioritize our customer service</p>
      </div>
    </div>
  );
};

export default Slideshow;
