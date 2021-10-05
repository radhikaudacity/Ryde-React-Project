import React from 'react';
import './navigation.css';
import { Link, useHistory } from 'react-router-dom';
// import logo from '/images/logo.svg';

function Navigation(props) {
  const history = useHistory();
  const NavTo = (to) => {
    //var elem = document.querySelector(`${to}`);

    var elem = document.getElementById(`${to}`);
    console.log(elem, 'elem', `${to}`);

    if (elem != null) {
      elem.scrollIntoView();
    }
  };
  return (
    <nav className='main-nav'>
      <div className='logo'>
        <div className='logo-items'>
          <img
            src={process.env.PUBLIC_URL + 'images/logo.svg'}
            className='logo-svg'
          />
          <h2>Ryde</h2>
        </div>
      </div>
      <div className='menu-btn'>
        <ul>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'> About</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/projectinfo/1',
              }}
              // onClick={(e) => {
              //   history.push({
              //     pathname: '/',
              //     search: '?id=projectsRef',
              //     hash: '#',
              //     state: { fromPopup: true },
              //   });
              //   NavTo('projectsRef');
              //   e.preventDefault();
              // }}
            >
              {' '}
              Projects
            </Link>
          </li>
          <li>
            <Link to='/team/1'>Team</Link>
          </li>
          <li>
            <Link to='/'> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
