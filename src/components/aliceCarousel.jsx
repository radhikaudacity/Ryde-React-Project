import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src='images/carousel/Slider1.jpg'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <img
    src='images/carousel/Slider2.jpg'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <img
    src='images/carousel/Slider3.jpg'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <img
    src='images/carousel/Slider4.jpg'
    onDragStart={handleDragStart}
    role='presentation'
  />,
  <img
    src='images/carousel/carousel1.jpg'
    onDragStart={handleDragStart}
    role='presentation'
  />,
];

const CarouselHeader = () => {
  return <AliceCarousel infinite mouseTracking items={items} />;
};
export default CarouselHeader;
