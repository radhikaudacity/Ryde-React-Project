import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import { carousel1, carousel3, carousel4 } from '/images/index';

export default function CarousalHeader() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          src={process.env.PUBLIC_URL + 'images/carousel/carousel3.jpg'}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          src={process.env.PUBLIC_URL + 'images/carousel/carousel1.jpg'}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          src={process.env.PUBLIC_URL + 'images/carousel/carousel4.jpg'}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}
