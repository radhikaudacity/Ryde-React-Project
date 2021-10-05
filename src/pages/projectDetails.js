import React from 'react';
import projectsData from '../assets/ProjectsData';
import './ProjectDetails.css';
import { useState } from 'react';
import logo from './images/logo.svg';

import { AiOutlinePlusSquare } from 'react-icons/ai';

// const AddIcon = () => <span class="icon">&#43;</span>;
// const RemoveIcon = () => <span class="icon">&#9747;</span>;

function ListItem(props) {
  const [checked, setChecked] = useState(false);
  return (
    <li
      style={{ listStyleType: 'decimal' }}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {/* < AiOutlinePlusSquare/> */}
      {props.item.lessonTitle}
      {checked ? (
        <div>
          <ul>
            {props.item.objectives.map((objective) => {
              return (
                <li className='objectives' style={{ listStyleType: 'square' }}>
                  {objective}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {/* : <AddIcon /> } */}
    </li>
  );
}

function List(props) {
  return (
    <ul>
      {props.projectData.map((item, index) => {
        return <ListItem item={item} />;
      })}
    </ul>
  );
}

function ProjectDetails() {
  const index = 0;

  return (
    <div className='container'>
      <div className='wrapper'>
        <header>
          <nav>
            <img src={logo} alt='' />
            <span className='home'> Home</span>{' '}
          </nav>
        </header>
        <div className='content'>
          <div>
            <h1> {projectsData[index].title} </h1>
            <img
              src={projectsData[index].image}
              className='projImg'
              width='600'
              height='300'
              alt=''
            />
            <br /> <br />
            <br /> <br />
            <div className='summary'>
              <br />
              <br />
              <br />
              <br />
              <table className='summaryTable'>
                <tr>
                  {' '}
                  <td className='summaryTableHeading'> Product </td>{' '}
                  <td> {projectsData[index].product} </td>{' '}
                </tr>{' '}
                <br />
                <tr>
                  <td className='summaryTableHeading'> EPM Business Proces </td>{' '}
                  <td> {projectsData[index].ePMBusinessProcess} </td>{' '}
                </tr>{' '}
                <br />
                <tr>
                  <td className='summaryTableHeading'> Project </td>{' '}
                  <td> {projectsData[index].project} </td>{' '}
                </tr>{' '}
                <br />
                <tr>
                  <td className='summaryTableHeading'> Client </td>{' '}
                  <td> {projectsData[index].client} </td>{' '}
                </tr>{' '}
                <br />
                <tr>
                  <td className='summaryTableHeading'> Deliverables </td>{' '}
                  <td> {projectsData[index].deliverables} </td>{' '}
                </tr>{' '}
                <br />
              </table>

              <svg style={{ marginLeft: '35px' }}>
                <circle
                  cx='100'
                  cy='70'
                  r='50'
                  stroke='brown'
                  stroke-width='22'
                  fill='white'
                />
                <text
                  x='35%'
                  y='40%'
                  text-anchor='middle'
                  fill='black'
                  font-size='30px'
                  font-family='Arial'
                  dy='.3em'
                >
                  {projectsData[index].noOfLessons}
                </text>
              </svg>
              <svg>
                <circle
                  cx='100'
                  cy='70'
                  r='50'
                  stroke='green'
                  stroke-width='22'
                  fill='white'
                />
                <text
                  x='35%'
                  y='40%'
                  text-anchor='middle'
                  fill='black'
                  font-size='30px'
                  font-family='Arial'
                  dy='.3em'
                >
                  {projectsData[index].noOfSlides}
                </text>
              </svg>
              <svg>
                <circle
                  cx='100'
                  cy='70'
                  r='50'
                  stroke='blue'
                  stroke-width='22'
                  fill='white'
                />
                <text
                  x='35%'
                  y='40%'
                  text-anchor='middle'
                  fill='black'
                  font-size='30px'
                  font-family='Arial'
                  dy='.3em'
                >
                  {projectsData[index].noOfLabActivities}
                </text>
              </svg>
              <div class='count'>
                <span style={{ marginLeft: '100px' }}> No. of Lessons </span>{' '}
                <span> No. of Slides </span>{' '}
                <span> No. of Lab Activities </span>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <p className='lessons'>
              {' '}
              Lessons{' '}
              <span style={{ fontWeight: 'normal' }}>
                {' '}
                (Click on a lesson to view its Objectives){' '}
              </span>
            </p>
            {
              <List projectData={projectsData[index].lessonDetails}>
                <ListItem></ListItem>
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetails;
