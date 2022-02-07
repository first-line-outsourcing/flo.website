import React from "react";
import './Cases.scss';
import CasesElement from "../components/casesElement/casesElement";

export default function Cases() {
  const casesKey = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="heading" style={{
        backgroundSize: 0,
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <h1 className='highlighted casesPageTitle'>Cases</h1>
              <div className='casesPadeDescriptionWrapper'>
                <p className='casesPageDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                  earum error illo illum libero nulla
                  provident. Incidunt labore similique soluta?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='casesContainer'>
          <div className='row items align-items-center'>
            <CasesElement casesKey={casesKey}/>
          </div>
          <button className='btn btn-accent loadMore'>Load More</button>
        </div>
      </div>
    </>
  );
}
