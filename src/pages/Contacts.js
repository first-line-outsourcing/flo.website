import React from "react";
import point from '../images/contacts/point.svg'
import phone from '../images/contacts/phone.svg'
import message from '../images/contacts/message.svg'
import './Contacts.scss'

export default function Contacts() {
  return (
    <div className='contacts'>
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
          <iframe className='map' title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.608031310213!2d38.96634605195044!3d45.03288187899546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fa3cbf68c8d%3A0x79321c0649b7567e!2sOktyabr&#39;skaya%20Ulitsa%2C%20141%2C%20Krasnodar%2C%20Krasnodarskiy%20kray%2C%20350000!5e0!3m2!1sen!2sru!4v1644235175636!5m2!1sen!2sru"/>
        </div>
      </div>
    </div>
    </div>
  );

}
