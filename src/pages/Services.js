import React from "react";
import "./Services.scss";
import ServiceItem from "../components/serviceItem";

export default function Services() {
  const items = [
    {
      title: "Web dev",
      description: "We develop SaaS solutions, SPA, PWA based on serverless architecture to level up your business. We help with different tasks, the process of optimization, sales growth, and customer loyalty.",
      img: require("../images/services/webDev.jpg"),
      link: "/services/webdev"
    },
    {
      title: "Mobile dev",
      description: "Сross-platform app development for a quick launch! Be in touch with your clients!",
      img: require("../images/services/mobileDev.jpg"),
      link: "https://flo.team/"
    },
    {
      title: "Tech Design ",
      description: "We design your future app with the help of business intelligence. Based on the data, we create a project architecture that will help you to scale easily in the future. We design wireframes and technical diagrams, so you can see the logic of the application work.\n",
      img: require("../images/services/techDesign.jpg"),
      link: "https://flo.team/"
    },
    {
      title: "Desktop apps",
      description: "We develop apps for private networks and for specific tasks. We customize the inner tasks of your business.",
      img: require("../images/services/desktopApps.jpg"),
      link: "https://flo.team/"
    },
    {
      title: "QA",
      description: "We provide auto or manual testing after each project to ensure the quality of development",
      img: require("../images/services/QA.jpg"),
      link: "https://flo.team/"
    },
    {
      title: "Adobe Panels",
      description: "We develop panels with custom functionality inside your favorite Adobe package and help you to automate your specific goals.",
      img: require("../images/services/adobePanels.jpg"),
      link: "https://flo.team/"
    },
    {
      title: "Browser extensions ",
      description: "We develop extension to make Internet work easier",
      img: require("../images/services/browserExtensions.jpg"),
      link: "https://flo.team/"
    }
  ]
  return (
    <div className="services">
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1>Full-cycle development for your business needs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title">
          <div className="row">
            <div className="col">
              <h3>Our <span className="highlighted">services</span></h3>
              <p>
                Together with you we discuss your challenges and choose the most effective way of solving them. We
                interview you to understand your business, understand the processes and offer the and concentrate on the
                result you get after our partnership.
              </p>
            </div>
          </div>
        </div>
        {items.map((item) => (
          <ServiceItem
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
