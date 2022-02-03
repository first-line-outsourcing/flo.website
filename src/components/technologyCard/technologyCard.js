import React from 'react';
import Arrow from '../../images/technologies/Arrow.svg'
import './TechnologyCard.scss'
import {Link} from "react-router-dom";

const TechnologyCard = ({img, title, text, link}) => {

  return (
    <Link className="nav-link" aria-current="page" to={`${link}`}>
      <div className='card'>

        <img src={img} alt={''} className='logo'/>

        <div><h3>{title}</h3></div>
        <p> {text}</p>
        <div className='arrowContainer'>
          <div className='regularArrow'><img src={Arrow} className='arrow'/></div>
        </div>
      </div>
    </Link>
  );
};

export default TechnologyCard;
