import React from 'react';
import iosLogo from "../../images/cases/techLogo/ios.svg";
import webLogo from "../../images/cases/techLogo/web.svg";
import reactLogo from "../../images/cases/techLogo/react.svg";
import androidLogo from "../../images/cases/techLogo/android.svg";
import hirefy from "../../images/cases/hirefy.png";
import superchat from "../../images/cases/superchat.png";
import img3 from "../../images/cases/img3.png";
import meatEater from "../../images/cases/meatEater.png";
import CaseElement from "./caseElement/caseElement";

const CasesElement = ({casesKey}) => {
  const technology = {
    ios: {
      logo: iosLogo,
      title: 'iOS'
    },
    web: {
      logo: webLogo,
      title: 'Web',
    },
    react: {
      logo: reactLogo,
      title: 'React'
    },
    android: {
      logo: androidLogo,
      title: 'Android'
    }
  }
  const cases = {
    1: {
      image: hirefy,
      title: 'Our big project that is too long for this world and smth',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
    2: {
      image: superchat,
      title: 'Writer Chrome Extension.',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
    3: {
      image: superchat,
      title: 'Writer Chrome Extension',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
    4: {
      image: img3,
      title: 'Our big project that is too long for this world and smth2',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
    5: {
      image: meatEater,
      title: 'Our big project that is too long for this world and smth3',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
    6: {
      image: superchat,
      title: 'Fireaway',
      technologies: [
        technology.android, technology.ios, technology.web, technology.react,
      ],
    },
  };
  const resultArray = casesKey.map((key) => {
    return cases[key];
  })
  const items = resultArray.map((item) => {
    return (
      <div className='col-xl-6 col-lg-6' key={item.title}>
        <CaseElement caseInfo={item}/>
      </div>
    );
  })


  return (
    <>
      {items}
    </>
  );
};

export default CasesElement;
