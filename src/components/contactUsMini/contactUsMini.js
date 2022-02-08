import React from 'react';
import './contactUsMini.scss'
import mobile from '../../images/contactUsMini/mobile.png'
import desktop from '../../images/contactUsMini/background.png'
import {Link} from "react-router-dom";

const ContactUsMini = () => {
  return (
    <Link to={`#`}>
      <div className='row bgContactUs'>
        <img className='desktop' alt='' src={desktop}/>
        <img className='mobile' alt='' src={mobile}/>
      </div>
    </Link>
  );
};

export default ContactUsMini;
