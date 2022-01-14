import React from 'react';
import TechnologiesCardStyle from '../technologyCard/Technologies.module.scss'
//const reqSvgs = require.context ( '/public/technologies', true, /\.svg$/ )
import Arrow from '../../images/technologies/Arrow.svg'
const TechnologyCard = (props) => {
   // console.log(reqSvgs.keys())
    return (
        <div className={TechnologiesCardStyle.card}>
            <div>
                <img src={props.img} alt={''}/>
            </div>
            <div><h3>{props.title}</h3></div>
            <p> {props.text}</p>
            <div><img src={Arrow}/></div>
        
        </div>
    );
};

export default TechnologyCard;
