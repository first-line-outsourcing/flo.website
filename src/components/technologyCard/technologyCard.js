import React from 'react';
import Arrow from '../../images/technologies/Arrow.svg'
import './TechnologyCard.scss'
const TechnologyCard = (props) => {
    
    return (
        <div className={'card'} >
            <div >
                <img src={props.img} alt={''} className={'logo'}/>
            </div>
            <div><h3>{props.title}</h3></div>
            <p> {props.text}</p>
            <div className={'arrow'}><img src={Arrow}/></div>
        
        </div>
    );
};

export default TechnologyCard;
