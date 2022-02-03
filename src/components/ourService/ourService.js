import React from 'react';
import ServiceItem from "../serviceItem";

const OurService = ({servicesInfo}) => {

  return (
    <div>
      <div className="title">
        <div className="row">
          <div className="col">
            <h3>Our <span>services</span></h3>
            <p>
              Together with you we discuss your challenges and choose the most effective way of solving them. We
              interview you to understand your business, understand the processes and offer the and concentrate on the
              result you get after our partnership.
            </p>
          </div>
        </div>
      </div>
      {servicesInfo.map((item) => (
        <>
          <ServiceItem
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
          />
        </>
      ))}
    </div>
  );
};

export default OurService;
