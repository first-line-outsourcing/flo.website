import React from "react";
import point from '../images/contacts/point.svg'
import phone from '../images/contacts/phone.svg'
import message from '../images/contacts/message.svg'
import map from '../images/contacts/map.png'
import './Contacts.scss'

export default function Contacts() {
  return <div className='contacts'>
    <div className='container'>
      <h1 className='contactsTitle highlighted'>Contacts</h1>
      <div className='mapAndInfo'>
        <div className='info'>

          <img src={point} alt='' className='point'/>
          <div className='address'>
            <p>Address</p>
            <p>Krasnodar, Russian Federation</p>
          </div>

          <img src={phone} alt='' className='phone'/>
          <div className='number'>
            <p>Call Us</p>
            <p> +7 996 408 39 86</p>
          </div>

          <img src={message} alt='' className='message'/>
          <div className='mail'>
            <p>For Support Enquiries</p>
            <p>info@rmeng.ru</p>
          </div>

        </div>

        <div className='mapContainer'>
          <img src={map} alt='' className='map'/>
        </div>
      </div>
    </div>
  </div>

}
