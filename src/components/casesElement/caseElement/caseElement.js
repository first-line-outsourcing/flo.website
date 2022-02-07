import React from 'react';
import './caseElement.scss'
const CaseElement = ({caseInfo}) => {
  const technology = caseInfo.technologies.map((tech) => {
    return (
      <div key={`${tech.title}_caseElement`} className='col-xl-auto col-lg-auto col-auto'>
        <img src={tech.logo} alt='' className='techLogo'/>
        <p className='techTitle'>{tech.title}</p>
      </div>
    );
  })
  return (
    <div className='caseElement'>
      <img src={caseInfo.image} alt='' className='caseImage'/>
      <p>{caseInfo.title}</p>
      <div className='row'>
        {technology}
      </div>
    </div>
  );
};

export default CaseElement;