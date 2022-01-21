import React from 'react';
import Arrow from '../../images/technologies/Arrow.svg'
import {Link} from "react-router-dom";
import './TechnologyCard.scss'
const TechnologyCard = (props) => {
    
    function mouseHandler() {
        console.log('Enter');
    }
    
    return (
        <div className="card" onMouseEnter={() => mouseHandler()}>
            <div>
                <img src={props.img} alt={''}/>
            </div>
            <div><h3>{props.title}</h3></div>
            <p> {props.text}</p>
            <div className="arrow">
                
                <Link className="nav-link" aria-current="page" to="/technology"><img src={Arrow} alt={''}/></Link>
            
            </div>
        
        </div>
    );
};

export default TechnologyCard;
