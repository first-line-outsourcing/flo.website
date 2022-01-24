import React from "react";
import point from '../images/contacts/point.svg'
import phone from '../images/contacts/phone.svg'
import message from '../images/contacts/message.png'
import map from '../images/contacts/map.png'
import './Contacts.scss'

export default function Contacts() {
    return <div className={'contacts'}>
        <div className={'container'}>
            <div className={'title'}>Contacts</div>
            <div className={'mapAndInfo'}>
                <div className={'info'}>
                    
                        <div className={'point'}><img src={point} alt={''}/></div>
                        <div className={'address'}><div>Address</div> <div>Krasnodar, Russian Federation</div></div>
                    
                        <div className={'phone'}><img src={phone} alt={''}/></div>
                        <div className={'number'}>
                            <div>Call Us</div>
                            <div> +7 996 408 39 86</div>
                        </div>
              
                    <div className={'message'}><img src={message} alt={''}/></div>
                        <div className={'mail'}>
                        <div>For Support Enquiries</div>
                        <div>info@rmeng.ru</div>
                        </div>
                    
                </div>
                
                <div className={'mapContainer'}>
                    <div className={'map'}/>
                </div>
            </div>
        </div>
    </div>
}
