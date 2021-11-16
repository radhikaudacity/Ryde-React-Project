import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './showProjects.css';
import dummy from '../images/showProjects/project1_sm.jpg';
import { AiOutlineProject } from 'react-icons/ai';

const ShowProjects = (props) => {
  const [mouseOver, setSMouseOver] = useState(-1);
  console.log(props.projectData);
  const projectData = props.projectData;
  const projTitles = projectData.map((item) => {
    return [item.title1, item.title2];
  });

  return (
    <div className=' ' id='projectsRef'>
      <h2 className='title'>
        Explore Our
        <span style={{ color: 'rgba(116, 32, 213, 1)', textAlign: 'center' }}>
          {' '}
          Projects
        </span>
      </h2>
      <h4 className='subtitle'>
        Our students have created these projects for Oracle Cloud
      </h4>
      <div className=''>
        <div className='portfolio-items-wrapper'>
          {projTitles.map((name, index) => {
            const ipath = projectData[index].thumbImage;
            console.log('ipath' + ipath);
            return (
              // className={`btn ${index === selected && 'active-btn'}`}
              <div className='flex-wrap'>
                <div
                  className={`portfolio-item-wrapper `}
                  key={index}
                  onMouseOver={() => setSMouseOver(index)}
                  onMouseOut={() => setSMouseOver(-1)}
                >
                  <Link
                    to={{ pathname: `/projectInfo/${index + 1}` }}
                    className=''
                  >
                    <div
                      className={`portfolio-img-bg ${
                        index === mouseOver && 'image-darken'
                      }`}
                      style={{
                        // backgroundImage: `url(${dummy})`,
                        // backgroundImage: `url(${process.env.PUBLIC_URL + ipath})`,
                        backgroundImage: `url(${projectData[index].thumbImage})`,
                      }}
                    ></div>
                    <div className='img-text-wrapper'>
                      <div
                        className={`logo-wrapper ${
                          index === mouseOver && 'cardtitle-mouseover'
                        }`}
                      >
                        <AiOutlineProject />
                        {/* <img
                        src='/images/showProjects/oracle_cloud.png'
                        className='logo-image'
                      /> */}
                      </div>

                      <div
                        className={`cardtitle ${
                          index === mouseOver && 'cardtitle-mouseover'
                        }`}
                      >
                        {name[0]}
                      </div>
                      <div
                        className={`cardtitle ${
                          index === mouseOver && 'cardtitle2-mouseover'
                        } `}
                      >
                        {name[1]}
                      </div>
                      <div
                        className={`cardtitle-sm ${
                          index === mouseOver && 'cardtitle-mouseover'
                        } `}
                      >
                        <br />
                        <br />
                        <p>Click to see more</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowProjects;
