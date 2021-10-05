import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './projectDetail.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProjectsSubMenu from '../components/projectsSubMenu';

function ListItem(props) {
  const [checked, setChecked] = useState(false);
  return (
    <li
      className='sub-subheading'
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {/* < AiOutlinePlusSquare/> */}
      {props.item.lessonTitle}
      {checked ? (
        <div>
          <ul>
            {props.item.objectives.map((objective, index) => {
              return (
                <li key={index} className='objectives'>
                  <MdKeyboardArrowRight />
                  {objective}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

function List(props) {
  return (
    <ul className='subHeading'>
      {props.projectData.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </ul>
  );
}
function ProjectDetail(props) {
  const params = useParams();
  const index = params.id - 1;
  const projectData = props.projectData;
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='header'>
          <div className='row'>
            <div className='col col-lg-2 left'>
              <ProjectsSubMenu id={index} projectData={projectData} />
            </div>

            <div className='col col-lg-10 '>
              <div className='right'>
                {/* -------------image --------------*/}
                <div>
                  {/* <h1> {projectData[index].title} </h1> */}
                  <img
                    src={process.env.PUBLIC_URL + projectData[index].image}
                    // src={projectData[index].image}
                    className='projImg'
                    alt={'projImg' + (index + 1)}
                  />
                </div>
                {/* -----------------card with statistics-------------------- */}
                <div className='mx-auto card bg-light'>
                  <div className=' '>
                    <div className=''>
                      <table className='summaryTable'>
                        <tbody>
                          <tr>
                            <td className='summaryTableHeading'> Product </td>
                            <td className='summaryTableHDetail'>
                              {projectData[index].product}
                            </td>
                          </tr>

                          <tr>
                            <td className='summaryTableHeading'>
                              EPM Business Process
                            </td>
                            <td> {projectData[index].ePMBusinessProcess} </td>
                          </tr>

                          <tr>
                            <td className='summaryTableHeading'> Project </td>
                            <td> {projectData[index].project} </td>
                          </tr>

                          <tr>
                            <td className='summaryTableHeading'> Client </td>
                            <td> {projectData[index].client} </td>
                          </tr>

                          <tr>
                            <td className='summaryTableHeading'>
                              Deliverables
                            </td>
                            <td style={{ whiteSpace: 'pre-line' }}>
                              {projectData[index].deliverables}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='flex-container'>
                    <div className=' text-center col-4'>
                      <div className='svg-wrapper'>
                        <svg viewBox='0 0 100% 100%'>
                          <circle
                            cx='50%'
                            cy='50%'
                            r='50'
                            stroke='#e932a6'
                            strokeWidth='22'
                            fill='white'
                          />
                          <text
                            x='50%'
                            y='50%'
                            textAnchor='middle'
                            fill='black'
                            fontSize='30px'
                            fontFamily='Arial'
                            dy='.3em'
                          >
                            {projectData[index].noOfLessons}
                          </text>
                        </svg>
                        <h3 className='count'>No. of Slides</h3>
                      </div>
                    </div>
                    <div className=' text-center col-4'>
                      <div className=''>
                        <svg>
                          <circle
                            cx='50%'
                            cy='50%'
                            r='50'
                            stroke='green'
                            strokeWidth='22'
                            fill='white'
                          />
                          <text
                            x='50%'
                            y='50%'
                            textAnchor='middle'
                            fill='black'
                            fontSize='30px'
                            fontFamily='Arial'
                            dy='.3em'
                          >
                            {projectData[index].noOfSlides}
                          </text>
                        </svg>
                        <h3 className='count'>No. of Lab Activities</h3>
                      </div>
                    </div>
                    <div className=' text-center col-4'>
                      <div className=''>
                        <svg>
                          <circle
                            cx='50%'
                            cy='50%'
                            r='50'
                            stroke='#7420d5'
                            strokeWidth='22'
                            fill='white'
                          />
                          <text
                            x='50%'
                            y='50%'
                            textAnchor='middle'
                            fill='black'
                            fontSize='30px'
                            fontFamily='Arial'
                            dy='.3em'
                          >
                            {projectData[index].noOfLabActivities}
                          </text>
                        </svg>
                        <h3 className='count'>No. of Lessons</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------------------lesson titles----------------------- */}
                <div
                  className='mx-auto card bg-light'
                  style={{ border: 'none' }}
                >
                  <div className='lesson-titles'>
                    <h2 className=''>Lessons</h2>
                    <p>(Click on a lesson to view its Objectives)</p>

                    {
                      <List projectData={projectData[index].lessonDetails}>
                        <ListItem />
                      </List>
                    }
                  </div>
                </div>
                {/* -------------------------right side ends here---------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
