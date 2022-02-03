import React from 'react';
import cycleImg from '../../images/technology/cycle.svg'
import './developmentCycle.scss'

const DevelopmentCycle = ({devInfo}) => {
  return (
    <div className='main'>

      <div className='cycleBlock'>
        <div className={'cycleText'}>{devInfo.devBlockTitle}</div>
        <img src={cycleImg} alt={''}/></div>

      <div className={`front grid_item`}><h3>{devInfo.devBlock_1.title}</h3><p>{devInfo.devBlock_1.text}</p></div>
      <div className={`back grid_item`}><h3>{devInfo.devBlock_2.title}</h3> <p>{devInfo.devBlock_2.text}</p></div>
      <div className={`cloud grid_item`}><h3>{devInfo.devBlock_3.title}</h3> <p>{devInfo.devBlock_3.text}</p></div>
      <div className={`db grid_item`}><h3>{devInfo.devBlock_4.title}</h3> <p>{devInfo.devBlock_4.text}</p></div>
      <div className={`text`}><p className={'first'}>{devInfo.devBlockDescription_1}</p><p> {devInfo.devBlockDescription_2}</p></div>
    </div>
  );
};

export default DevelopmentCycle;
