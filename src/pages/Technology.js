import React from "react";
import DevelopmentCycle from "../components/developmentCycle/developmentCycle";
import OurService from "../components/ourService/ourService";
import './Technology.scss'
import {Link, useParams} from "react-router-dom";
import ContactUsMini from "../components/contactUsMini/contactUsMini";
import OurCases from "../components/ourCases/ourCases";

export default function Technology() {
  const {technologyName} = useParams();
  const pageData = {
    angular: {
      headerImage: require("../images/technology/angular.png"),
      headerTitle: "Angular",
      headerDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis eum nihil repudiandae sed! Ab consectetur cum deserunt eius excepturi, exercitationem maiores mollitia, nulla perspiciatis recusandae sequi.",
      devInfo: {
        devBlockTitle: "Full cycle of development services",
        devBlock_1: {
          title: 'Frontend development',
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias perspiciatis voluptate"
        },
        devBlock_2: {
          title: 'Backend development',
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias perspiciatis voluptate"
        },
        devBlock_3: {
          title: 'Cloud development',
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias perspiciatis voluptate"
        },
        devBlock_4: {
          title: 'Database design development',
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias perspiciatis voluptate"
        },
        devBlockDescription_1: "You have only challenges and ideas, but we have solutions to help your business. We will design, develop and test your web product. We only interview you and then do everything yourself!",
        devBlockDescription_2: "You have only challenges and ideas, but we have solutions to help your business. We will design, develop and test your web product. We only interview you and then do everything yourself!",
      },
      servicesInfo: [
        {
          title: "Web dev",
          description: "We develop SaaS solutions, SPA, PWA based on serverless architecture to level up your business. We help with different tasks, the process of optimization, sales growth, and customer loyalty.",
          img: require("../images/services/webDev.jpg"),
          link: "https://flo.team/"
        },
        {
          title: "Mobile dev",
          description: "Сross-platform app development for a quick launch! Be in touch with your clients!",
          img: require("../images/services/mobileDev.jpg"),
          link: "https://flo.team/"
        },
        {
          title: "Desktop apps",
          description: "We develop apps for private networks and for specific tasks. We customize the inner tasks of your business.",
          img: require("../images/services/desktopApps.jpg"),
          link: "https://flo.team/"
        },
      ],
      casesKeys: [1,2,3,4]
    }
  }
  return (
    <div className='technologyPage'>
      <div className="heading bg" style={{
        backgroundImage: `url(
            ${pageData[technologyName].headerImage})`,
      }}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>{pageData[technologyName].headerTitle}</h1>
              <p className='headerDescription'>{pageData[technologyName].headerDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container'><DevelopmentCycle devInfo={pageData[technologyName].devInfo}/></div>
      </div>

      <div className='container'>
        <OurService servicesInfo={pageData[technologyName].servicesInfo}/>
        <ContactUsMini/>
      </div>

      <div>
        <div className='ourCases pt-10 pb-5'>
          <div className='container'>
            <h1 className='highlighted text-center'>Our cases</h1>
            <h2 className='text-center'>based on development service</h2>
            <p className='text-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi debitis dolores itaque magni mollitia placeat quod reprehenderit tenetur vel vitae.</p>
          </div>
        </div>
        <OurCases casesKey={pageData[technologyName].casesKeys} background={'black'}/>
        <div className='container'>
          <div className='row justify-content-center'>
           <Link to='/cases' className='col-1'><button className='btn btn-accent'>Load more</button></Link>
          </div>
        </div>
      </div>

    </div>
  );
}
