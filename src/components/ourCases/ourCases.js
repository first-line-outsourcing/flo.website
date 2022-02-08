import React from 'react';
import hirefy from "../../images/cases/hirefy.png";
import superchat from "../../images/cases/superchat.png";
import img3 from "../../images/cases/img3.png";
import meatEater from "../../images/cases/meatEater.png";
import CaseElement from "./caseElement/caseElement";
import './ourCases.scss'
import androidBlack from '../../images/casesElement/techLogoBlack/android.svg'
import iosBlack from '../../images/casesElement/techLogoBlack/ios.svg'
import webBlack from '../../images/casesElement/techLogoBlack/web.svg'
import reactBlack from '../../images/casesElement/techLogoBlack/react.svg'
import androidWhite from '../../images/casesElement/techLogoWhite/android.svg'
import iosWhite from '../../images/casesElement/techLogoWhite/ios.svg'
import webWhite from '../../images/casesElement/techLogoWhite/web.svg'
import reactWhite from '../../images/casesElement/techLogoWhite/react.svg'

const OurCases = (casesInfo) => {
  const techLogoColor = casesInfo.background === 'white' ? 'black' : 'white'
  const technology = {
    white: {
      ios: {
        logo: iosWhite,
        title: 'iOS'
      },
      www: {
        logo: webWhite,
        title: 'Web',
      },
      react: {
        logo: reactWhite,
        title: 'React'
      },
      android: {
        logo: androidWhite,
        title: 'Android'
      }
    },
    black: {
      ios: {
        logo: iosBlack,
        title: 'iOS'
      },
      www: {
        logo: webBlack,
        title: 'Web',
      },
      react: {
        logo: reactBlack,
        title: 'React'
      },
      android: {
        logo: androidBlack,
        title: 'Android'
      }
    },
  }
  const cases = {
    1: {
      image: hirefy,
      title: 'Our big project that is too long for this world and smth',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
    2: {
      image: superchat,
      title: 'Writer Chrome Extension.',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
    3: {
      image: superchat,
      title: 'Writer Chrome Extension',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
    4: {
      image: img3,
      title: 'Our big project that is too long for this world and smth2',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
    5: {
      image: meatEater,
      title: 'Our big project that is too long for this world and smth3',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
    6: {
      image: superchat,
      title: 'Fireaway',
      link: "/case/caseName",
      technologies: [
        technology[techLogoColor].android, technology[techLogoColor].ios, technology[techLogoColor].www, technology[techLogoColor].react,
      ],
    },
  };
  const resultArray = casesInfo.casesKey.map((key) => {
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
    <div className={`casesWrapper ${casesInfo.background === 'white' ? 'bg-white' : ''}`}>
      <div className='container'>
        <div className='row items align-items-center'>
          {items}
        </div>
      </div>
    </div>
  );
};

export default OurCases;
