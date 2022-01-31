import React from "react";
import DevelopmentCycle from "./tecnology/developmentCycle/developmentCycle";
import OurService from "./tecnology/ourService/ourService";
import './Technology.scss'

export default function Technology() {
  return (
    <div className={'tech'}>
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Full-cycle development for your business needs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={'about'}>
        <div className={'container'}><DevelopmentCycle/></div>
      </div>
      <div>
        <div className={'container'}><OurService/></div>
      </div>
      <div>contact us</div>
      <div>our cases</div>
      <div>client testimoniaals</div>
    </div>
  );
}
