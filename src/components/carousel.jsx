import React, { Suspense, lazy } from 'react';

import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import { carousel1, carousel3, carousel4 } from '/images/index';
import carousel1 from '../images/carousel/carousel1_sm.jpg';
import carousel4 from '../images/carousel/carousel4.jpg';
import carousel3 from '../images/carousel/carousel3.jpg';
import dummy from '../images/showProjects/dummy6.jpg';
import temp from '../images/carousel/temp.png';
export default function CarousalHeader() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          // src={window.location.origin + '/images/carousel/carousel3.jpg'}
          src={carousel1}
          alt='carousel1'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          // src={window.location.origin + '/images/carousel/carousel1.jpg'}
          src={carousel4}
          alt='carousel4'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          // src={window.location.origin + '/images/carousel/carousel4.jpg'}
          src={carousel3}
          alt='carousel3'
        />
      </Carousel.Item>
    </Carousel>
  );
}
