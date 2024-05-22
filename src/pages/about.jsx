import React, { useState } from 'react';
// import './Slideshow.css';

const images = [
  '../public/images/placeholder1.jpg',
  '../public/images/placeholder2.jpg',
  '../public/images/placeholder3.jpg',
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
    <div className="slideshow-container">
      <button onClick={goToPrevSlide}>Previous</button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
