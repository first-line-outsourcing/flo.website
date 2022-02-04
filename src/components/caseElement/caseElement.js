import React from 'react';

const CaseElement = ({image, title, technologies}) => {
  let technology= technologies.map((tech)=>{
    return <div>
      <img src={tech.image} alt=''/>
      <span>{tech.title}</span>
    </div>
  })
  return (
    <div>
      <img src={image}/>
      <h3>{title}</h3>
      {technology}
    </div>
  );
};

export default CaseElement;
