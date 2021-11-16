import React from 'react';
import CarousalHeader from '../components/aliceCarousel.jsx';
import ShowProjects from '../components/showProjects';
import Notices from '../components/notices';
import './home.css';
import { useLocation } from 'react-router-dom';

function Home(props) {
  const location = useLocation();
  console.log('home', location);
  return (
    <div className='wrapper'>
      <div className='container'>
        <CarousalHeader />
        <section className='central-layout'>
          <div className='main-col'>
            <ShowProjects projectData={props.projectData} />
          </div>
          <div className='side-col'>
            <Notices />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
