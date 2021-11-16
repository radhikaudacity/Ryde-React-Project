import React from 'react';
import './notices.css';
import { Card } from 'react-bootstrap';
const Notices = (props) => {
  return (
    <div className='main'>
      <Card className='title'>
        <p>Notices</p>
        <p>Coming soon!</p>
      </Card>
    </div>
  );
};

export default Notices;
