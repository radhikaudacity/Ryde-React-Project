import React from 'react';
import PlaneImg from '../images/contact/plane.svg';
import location from '../images/contact/location.svg';
import { AiOutlineMail } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  return (
    <div className='wrapper'>
      <div className='container py-5'>
        <div className='contact row pt-5'>
          <div className='col-12 col-lg-6'>
            <div className='contact row pt-5'>
              <div className='col-12'>
                <div className='contact-detail'>
                  <h3 className='title'>Get In Touch</h3>
                  <ul className='my-5'>
                    <li className='my-3'>
                      <img
                        className='img-fluid mr-2'
                        alt='contacticon'
                        width='20px'
                        src={location}
                      ></img>
                      123 Hariharan bajar St., Ponneri
                    </li>

                    <li className='my-3'>
                      <AiOutlineMail />
                      {} aaa@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12'>
                <img
                  src={PlaneImg}
                  className='img-fluid'
                  alt='plane'
                  height='150px'
                  width='150px'
                ></img>
              </div>
            </div>
          </div>
          <div className='col-12  col-lg-6'>
            <div className='form-wrapper'>
              <form action='' method='POST' autoComplete='off'>
                <div className='row'>
                  <div className='col mb-3'>
                    <input
                      type='text'
                      name='name'
                      className=' form-control py-4 '
                      id='name'
                      placeholder='Name'
                      required
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col  mb-3'>
                    <input
                      type='email'
                      name='_replyto'
                      className=' form-control py-4'
                      id='mail'
                      placeholder='Email address'
                      required
                    />
                  </div>
                </div>
                <div className=' mb-3'>
                  <textarea
                    type='text'
                    rows='5'
                    className=' form-control '
                    id='subject'
                    placeholder='Write your message here'
                    required
                  ></textarea>
                </div>
                <button className='btn btn-primary submit-btn' type='submit'>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
