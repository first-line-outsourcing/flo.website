import React from 'react';
import cycleImg from '../../../images/technology/cycle.svg'
import './developmentCycle.scss'

const DevelopmentCycle = () => {
  return (
    <div className='main'>

      <div className='cycleBlock'>
        <div className={'cycleText'}>Full cycle of development service</div>
        <img src={cycleImg} alt={''}/></div>

      <div className={`front grid_item`}><h3>Frontend development</h3><p> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        Ad alias perspiciatis voluptate.</p></div>
      <div className={`back grid_item`}><h3>Backend development</h3> <p> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        Ad alias perspiciatis voluptate.</p></div>
      <div className={`cloud grid_item`}><h3>Cloud development</h3> <p> Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        Ad alias perspiciatis voluptate.</p></div>
      <div className={`db grid_item`}><h3>Database design</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
        Ad alias perspiciatis voluptate.</p></div>
      <div className={`text`}><p className={'first'}>Ten years ago a traveler could barely imagine preparing for a
        journey without the help of a professional. Today, however, travelers are much more independent. Instead of
        relying on travel agencies to book hotel rooms and flights on their behalf, people use mobile and web solutions
        to do the job quickly and affordably. Technology has made it possible for almost anyone to organize and plan a
        trip with nothing more than a digital device.</p><p> This article describes the travel app marketplace—including
        the top players and the functions most important for apps in your desired category—so that your launch can
        distinguish itself and build a base of loyal users.</p></div>
    </div>
  );
};

export default DevelopmentCycle;
