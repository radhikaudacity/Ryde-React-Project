import React from 'react';
import './footer.css';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../images/logo.svg';
function Footer(props) {
  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='foot-col'>
            <div className='logo-items'>
              <img src={logo} className='filter-invert ' />
              <h3>Ryde</h3>
            </div>
            <div className='tagline'>
              <h3>
                Provide <span style={{ fontSize: '3rem' }}>Quality</span>{' '}
                Consulting Services
              </h3>
            </div>
          </div>
          <div className='foot-col'>
            <ul>
              <h2>Company</h2>
              <li>
                <a hewf=''>home</a>
              </li>
              <li>
                <a hewf=''>about</a>
              </li>
              <li>
                <a hewf=''></a>projects
              </li>
              <li>
                <a hewf=''></a>team
              </li>
              <li>
                <a hewf=''>gallery</a>
              </li>
            </ul>
          </div>
          <div className='foot-col'>
            <ul>
              <h2>Terms</h2>
              <li>
                <a hewf=''>FAQ</a>
              </li>
              <li>
                <a hewf=''>privacy</a>
              </li>
            </ul>
          </div>
          <div className='foot-col'>
            <h2>Follow us</h2>
            <div className='social-links'>
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>© Rydecs. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
