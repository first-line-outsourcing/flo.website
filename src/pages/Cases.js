import React from "react";
import './Cases.scss';
import CaseElement from "../components/caseElement/caseElement";

export default function Cases() {

  let cases = [
    {
      image: '',
      title: 'Our big project that is too long for this world and smth',
      technologies: [
        {
          logo: '',
          title: 'Android'
        },
        {
          logo: '',
          title: 'iOS'
        },
        {
          logo: '',
          title: 'Web'
        },
        {
          logo: '',
          title: 'React'
        },
      ],
    },
    {
      image: '',
      title: 'Writer Chrome Extension',
      technologies: [
        {
          logo: '',
          title: 'Android'
        },
        {
          logo: '',
          title: 'iOS'
        },
        {
          logo: '',
          title: 'Web'
        },
        {
          logo: '',
          title: 'React'
        },
      ],
    },
    {
      image: '',
      title: 'Writer Chrome Extension',
      technologies: [
        {
          logo: '',
          title: 'Android'
        },
        {
          logo: '',
          title: 'iOS'
        },
        {
          logo: '',
          title: 'Web'
        },
        {
          logo: '',
          title: 'React'
        },
      ],
    },
    {
      image: '',
      title: 'Our big project that is too long for this world and smth',
      technologies: [
        {
          logo: '',
          title: 'Android'
        },
        {
          logo: '',
          title: 'iOS'
        },
        {
          logo: '',
          title: 'Web'
        },
        {
          logo: '',
          title: 'React'
        },
      ],
    },
  ];
  let items = cases.map((item) => {
    return <div>
      <CaseElement caseInfo={item}/>
    </div>
  })
  return <div className={'technology'}>
    <div className="heading bg" style={{
      backgroundSize: 0,
    }}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className='highlighted'>Cases</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid earum error illo illum libero nulla
              provident. Incidunt labore similique soluta?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='casesContainer'>
      <div className='row'>
        {items}
      </div>
    </div>
  </div>
}
