import React, { useState, useEffect } from 'react';

import './projectsSubMenu.css';
import { Link } from 'react-router-dom';
function ProjectsSubMenu(props) {
  const projectData = props.projectData;
  const [selected, setSelected] = useState(0);

  const titlesArray = projectData.map((item) => {
    return item.title;
  });

  useEffect(() => {
    setSelected(props.id);
    window.scrollTo(0, 0);
  }, [props.id]);

  return (
    <div className='submenu'>
      <h3>Products</h3>
      <ul>
        {titlesArray.map((name, index) => {
          return (
            <li
              key={index}
              className={`btn ${index === selected && 'active-btn'}`}
              onClick={() => setSelected(index)}
            >
              <Link to={`/projectinfo/${index + 1}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsSubMenu;
