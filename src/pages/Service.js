import React from "react";
import {useParams} from "react-router-dom";
import "./Service.scss";
import TechnologyItems from "../components/technologyItems";
import WorkProcess from "../components/workProcess";
import {useMediaQuery} from 'react-responsive';


export default function Service() {
  const {serviceName} = useParams();
  const isMobile = useMediaQuery({query: '(max-width: 576px)'});
  const pageData = {
    webdev: {
      headerImage: require("../images/services/webDevHeader.jpg"),
      headerTitle: "Web development",
      headerDescription: "Help you create web products to reach your goals and save your resources for new launches by using serverless technologies.",
      pageTitle: "Full cycle of development services",
      pageDescription: "You have only challenges and ideas, but we have solutions to help your business. We will design, develop and test your web product. We only interview you and then do everything yourself!",
      pageQuestion: "What will you get?",
      pageAnswer: "SaaS, single page applications, progressive web applications"
    }
  }

  return (
    <>
      <div
        className="heading"
        style={{
          backgroundImage: `linear-gradient(90.22deg, rgba(0, 0, 0, 0.8) 0.18%, rgba(0, 0, 0, 0) 99.8%), url(
            ${pageData[serviceName].headerImage})`,
        }}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>{pageData[serviceName].headerTitle}</h1>
              <h4>{pageData[serviceName].headerDescription}</h4>
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
                    className="highlighted">{pageData[serviceName].pageTitle.split(' ').slice(0, 2).join(' ')}</span>
                  {' ' + pageData[serviceName].pageTitle.split(' ').slice(2, pageData[serviceName].pageTitle.length).join(' ')}
                </h3>
              </div>
              <div className='col pageDescription'>
                <h4>{pageData[serviceName].pageDescription}</h4>
                <h5>{pageData[serviceName].pageQuestion}</h5>
                <h6>{pageData[serviceName].pageAnswer}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="technologiesStack text-center bg-white">
        <div className="container itemsContainer">
          <h1><span className="highlighted">Technologies</span> stack</h1>
          <TechnologyItems numberOfTechnologies={isMobile ? 6 : 9}/>
        </div>
      </div>
      <div className="container text-center workProcess">
        <h2>Our <span className="highlighted">work process</span></h2>
        <p>We’re transparent in our work and use agile. We’ll be in touch with you and start the next step only after
          your approval. </p>
        <WorkProcess/>
      </div>
    </>
  );
}
