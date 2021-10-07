import React, { Suspense, lazy } from 'react';

import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import { carousel1, carousel3, carousel4 } from '/images/index';
import carousel1 from '../images/carousel/carousel1.jpg';
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
          src={require('../images/carousel/temp.jpg').default}
          alt='temp require'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          // src={window.location.origin + '/images/carousel/carousel1.jpg'}
          src={dummy}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100'
          // src={window.location.origin + '/images/carousel/carousel4.jpg'}
          src={carousel3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}
