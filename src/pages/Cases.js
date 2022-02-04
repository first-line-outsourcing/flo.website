import React from "react";
import './Cases.scss';
import android from '../images/cases/techLogo/android.svg';
import react from '../images/cases/techLogo/react.svg';
import ios from '../images/cases/techLogo/ios.svg';
import web from '../images/cases/techLogo/web.svg'
import hirefy from '../images/cases/hirefy.png'
import img3 from '../images/cases/img3.png'
import superchat from '../images/cases/superchat.png'
import meatEater from '../images/cases/meatEater.png'

import CaseElement from "../components/caseElement/caseElement";

export default function Cases() {

  let cases = [
    {
      image: hirefy,
      title: 'Our big project that is too long for this world and smth',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
    {
      image: superchat,
      title: 'Writer Chrome Extension.',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
    {
      image: superchat,
      title: 'Writer Chrome Extension',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
    {
      image: img3,
      title: 'Our big project that is too long for this world and smth2',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
    {
      image: meatEater,
      title: 'Our big project that is too long for this world and smth3',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
    {
      image: superchat,
      title: 'Fireaway',
      technologies: [
        {
          logo: android,
          title: 'Android'
        },
        {
          logo: ios,
          title: 'iOS'
        },
        {
          logo: web,
          title: 'Web'
        },
        {
          logo: react,
          title: 'React'
        },
      ],
    },
  ];
  let items = cases.map((item) => {
    return <div className='col-xl-6 col-lg-6' key={item.title}>
      <CaseElement caseInfo={item}/>
    </div>
  })
  return <div className={'technology'}>
    <div className="heading bg" style={{
      backgroundSize: 0,
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h1 className='highlighted casesPageTitle'>Cases</h1>
            <div className='casesPadeDescriptionWrapper'>
              <p className='casesPageDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                earum error illo illum libero nulla
                provident. Incidunt labore similique soluta?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='casesContainer'>
        <div className='row items align-items-center'>
          {items}
        </div>
        <button className='btn btn-accent loadMore'>Load More</button>
      </div>
    </div>
  </div>
}
