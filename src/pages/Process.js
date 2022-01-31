import React from "react";
import "./Process.scss";
import ourWorkProcessLine from "../images/ourWorkProcessLine.svg";
import ContactUsBanner from "../components/contactUsBanner";
import {useMediaQuery} from "react-responsive";

export default function Process() {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  const processItems = [
    {
      number: "1.",
      name: "Init",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    },
    {
      number: "2.",
      name: "Discovery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    },
    {
      number: "3.",
      name: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    },
    {
      number: "4.",
      name: "Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    },
    {
      number: "5.",
      name: "Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    },
    {
      number: "6.",
      name: "Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
      arguments: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    }
  ];
  const leftSide = [];
  const rightSide = [];
  processItems.filter((item, index) => index % 2 === 0 ? leftSide.push(item) : rightSide.push(item));

  const itemsComponent = (items) => {
    return items.map(item => (
    <>
      <h3 key={item.name}><span>{item.number}</span>{item.name}</h3>
      <p>{item.description}</p>
      <ul>
        {item.arguments.map(argument => (
          <li>{argument}</li>
        ))}
      </ul>
    </>
  ))}

  return (
    <>
      <div className="heading"
           style={{
             backgroundImage: `linear-gradient(90.22deg, rgba(0, 0, 0, 0.8) 0.18%, rgba(0, 0, 0, 0) 99.8%),
             url(${require("../images/process.jpg")})`,
             paddingTop: '200px'
           }}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Work process</h1>
              <h4 className="undisplayedOnMobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center ourWorkProcessHead">
        <h2>Our work <span className="highlighted">process</span></h2>
        <p className="undisplayedOnMobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
          dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
      </div>
      <div className="container ourWorkProcess">
        {isMobile
        ? <>{itemsComponent(processItems)}</>
        : (
            <div className='row justify-content-center'>
              <div className="col ourWorkProcessLeftSide">
                {itemsComponent(leftSide)}
              </div>
              <div className="col ourWorkProcessCenterLine">
                <img src={ourWorkProcessLine} alt=""/>
              </div>
              <div className="col ourWorkProcessRightSide">
                {itemsComponent(rightSide)}
              </div>
            </div>
          )
        }
      </div>
      <ContactUsBanner />
    </>
  );
}
