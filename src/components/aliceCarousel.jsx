import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
} from '../images/index.js';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={slider1} onDragStart={handleDragStart} role='presentation' />,
  <img src={slider2} onDragStart={handleDragStart} role='presentation' />,
  <img src={slider3} onDragStart={handleDragStart} role='presentation' />,
  <img src={slider4} onDragStart={handleDragStart} role='presentation' />,
  <img src={slider5} onDragStart={handleDragStart} role='presentation' />,
];

const CarouselHeader = () => {
  return <AliceCarousel infinite mouseTracking items={items} />;
};
export default CarouselHeader;
