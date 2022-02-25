import React from "react";
import {Link, useParams} from "react-router-dom";
import "./Service.scss";
import TechnologyItems from "../components/technologyItems";
import WorkProcess from "../components/workProcess";
import OurCases from "../components/ourCases/ourCases";


export default function Service() {
  const {serviceName} = useParams();
  const pageData = {
    webdev: {
      headerImage: require("../images/services/webDevHeader.jpg"),
      headerTitle: "Web development",
      headerDescription: "Help you create web products to reach your goals and save your resources for new launches by using serverless technologies.",
      pageTitle: "Full cycle of development services",
      pageDescription: "You have only challenges and ideas, but we have solutions to help your business. We will design, develop and test your web product. We only interview you and then do everything yourself!",
      pageQuestion: "What will you get?",
      pageAnswer: "SaaS, single page applications, progressive web applications",
      technologies: ['typeScript', 'react', 'dart', 'electron'],
      casesTitle: 'Our web development cases',
      casesDescription: 'We developed the entertainment platform and increased sales by 15%, integrated social networks with external services, and increased DAU by 8%... What are you waiting for? Let’s work together!',
      cases: [1, 2, 3, 4]
    }
  };

  const displayData = pageData[serviceName];

  return (
    <div className="service">
      <div
        className="heading"
        style={{
          backgroundImage: `linear-gradient(90.22deg, rgba(0, 0, 0, 0.8) 0.18%, rgba(0, 0, 0, 0) 99.8%), url(
            ${displayData.headerImage})`,
        }}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>{displayData.headerTitle}</h1>
              <h4>{displayData.headerDescription}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mainPage bg-white">
        <div className="container">
          <div className="pageTitle">
            <div className="row">
              <div className="col">
                <h3>
                  <span
                    className="highlighted">{displayData.pageTitle.split(' ').slice(0, 2).join(' ')}</span>
                  {' ' + displayData.pageTitle.split(' ').slice(2, displayData.pageTitle.length).join(' ')}
                </h3>
              </div>
              <div className='col pageDescription'>
                <h4>{displayData.pageDescription}</h4>
                <h5>{displayData.pageQuestion}</h5>
                <h6>{displayData.pageAnswer}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-10 pb-5 text-center ourCases'>
        <h2>
          {displayData.casesTitle.split(' ').slice(0, displayData.casesTitle.split(' ').length - 1).join(' ') + ' '}
          <span
            className="highlighted">{displayData.casesTitle.split(' ').slice(displayData.casesTitle.split(' ').length - 1).join(' ')}</span>
        </h2>
        <p>{displayData.casesDescription}</p>
      </div>
      <OurCases casesKey={displayData.cases} background={'black'}/>
      <div className='container'>
        <div className='text-center'>
          <Link to='/cases'>
            <button className='btn btn-accent col-1 ourCasesButton text-center'>See more</button>
          </Link>
        </div>
      </div>
      <div className="technologiesStack text-center bg-white">
        <div className="container itemsContainer">
          <h1><span className="highlighted">Technologies</span> stack</h1>
          <TechnologyItems technologies={displayData.technologies}/>
        </div>
      </div>
      <div className="container text-center workProcess">
        <h2>Our <span className="highlighted">work process</span></h2>
        <p>We’re transparent in our work and use agile. We’ll be in touch with you and start the next step only after
          your approval. </p>
        <WorkProcess/>
      </div>
    </div>
  );
}
