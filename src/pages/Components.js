import React from "react";

// import from ../components folder should be here

export default function Components() {
  return <div>
    <div className="container pt-20">
      <h1>Components</h1>
      <hr/>

      <h1>h1 Heading <span className="highlighted">highlighted</span></h1>
      <h2>h2 Heading <span className="highlighted">highlighted</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
    </div>
    <div className="bg-white mt-5 mb-5 pt-5 pb-5">
      <div className="container">
        <h1>h1 Heading <span className="highlighted">highlighted</span></h1>
        <h2>h2 Heading <span className="highlighted">highlighted</span></h2>
        <div className="row">
          <div className="col-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div>
        <button className="btn btn-accent">Button accent</button>
      </div>
      <p>&nbsp;</p>
      <div>
        <button className="btn">Button white</button>
      </div>
      <p>&nbsp;</p>
      <div>
        <button className="btn btn-bordered">Button dark</button>
      </div>
      <p>&nbsp;</p>
      <div>
        <button className="btn btn-bordered full-width">Button full width</button>
      </div>
    </div>
  </div>
}
