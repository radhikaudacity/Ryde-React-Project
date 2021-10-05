import React from 'react';
import CarousalHeader from '../components/carousel';
import ShowProjects from '../components/showProjects';
import './home.css';
import { useLocation } from 'react-router-dom';

function Home(props) {
  const location = useLocation();
  console.log('home', location);
  return (
    <div className='wrapper'>
      <div className='container'>
        <CarousalHeader />
        <ShowProjects projectData={props.projectData} />
      </div>
    </div>
  );
}

export default Home;
