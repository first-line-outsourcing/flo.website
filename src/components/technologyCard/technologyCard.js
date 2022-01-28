import React from 'react';
import Arrow from '../../images/technologies/Arrow.svg'
import './TechnologyCard.scss'

const TechnologyCard = ({img, title, text, link}) => {

  return (
    <a href={link}>
    <div className={'card'}>
      <div>
        <img src={img} alt={''} className={'logo'}/>
      </div>
      <div><h3>{title}</h3></div>
      <p> {text}</p>
      <div className={'arrowContainer'}>
        <div className={'regularArrow'}><img src={Arrow} className={'arrow'}/></div>
      </div>
    </div>
    </a>
  );
};

export default TechnologyCard;
