import React from "react";
import point from '../images/contacts/point.svg'
import phone from '../images/contacts/phone.svg'
import message from '../images/contacts/message.png'
import './Contacts.scss'

export default function Contacts() {
  return <div className='contacts'>
    <div className='container'>
      <div className='contactsTitle'>Contacts</div>
      <div className='mapAndInfo'>
        <div className='info'>

          <img src={point} alt='' className='point'/>
          <div className='address'>
            <span>Address</span>
            <span className='block'>Krasnodar, Russian Federation</span>
          </div>

          <img src={phone} alt='' className='phone'/>
          <div className='number'>
            <span>Call Us</span>
            <span className='block'> +7 996 408 39 86</span>
          </div>

          <img src={message} alt='' className='message'/>
          <div className='mail'>
            <span>For Support Enquiries</span>
            <span className='block'>info@rmeng.ru</span>
          </div>

        </div>

        <div className='mapContainer'>
          <div className='map'/>
        </div>
      </div>
    </div>
  </div>
}
