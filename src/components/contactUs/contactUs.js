import React from 'react';
import './contactUs.scss'
import mobile from '../../images/contactUs/mobile.png'
import desktop from '../../images/contactUs/background.png'
import {Link} from "react-router-dom";
const ContactUs = () => {
  return (
    <Link  to={`#`}>
    <div className='row bgContactUs'>
      <img className='desktop' alt='' src={desktop}/>
      <img className='mobile' alt='' src={mobile}/>
    </div>
    </Link>
  );
};

export default ContactUs;
