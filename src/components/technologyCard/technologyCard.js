import React from 'react';
import TechnologiesCardStyle from '../technologyCard/Technologies.module.scss'
import Arrow from '../../images/technologies/Arrow.svg'
const TechnologyCard = (props) => {
    
    function mouseHandler(){
        console.log('Enter');
    }
    
    return (
        <div className={TechnologiesCardStyle.card} onMouseEnter={()=>mouseHandler()} >
            <div>
                <img src={props.img} alt={''}/>
            </div>
            <div><h3>{props.title}</h3></div>
            <p> {props.text}</p>
            <div className={TechnologiesCardStyle.arrow}><img src={Arrow}/></div>
        
        </div>
    );
};

export default TechnologyCard;
