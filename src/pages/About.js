import React from "react";
import "./About.scss";
import andrewZaikin from '../images/about/team/team_zaikin_andrew.jpg';
import anastasiaZhivaeva from '../images/about/team/team_zhivaeva_anastasia.jpg';
import victorKolesnikov from '../images/about/team/team_kolesnikov_victor.jpg';
import anastasiaDziova from '../images/about/team/team_dziova_anastasia.jpg';

export default function About() {
  return <div className="about">
    <div className="heading">
      <div className="container">
        <div className="row">
          <div className="row-cols-1 row-cols-md-2">
            <h1>Our team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white pt-10 pb-5">
      <div className="container">
        <div className="row gx-md-5 row-cols-1 row-cols-md-2">
          <div className="col pb-md-5">
            <h2>About <span className="highlighted">us</span></h2>
            <p>Unlike most other firms, we take business needs first, making cutting-edge tech work for the goals of your company.</p>
            <p>One of our core values is design. As fans of all things simple, we create clean, in-your-face user interfaces even for the most sophisticated workflows.We strongly believe in the lean methodology, which means we'll encourage you to spend as little money as possible for the first version of your product. Instead of making assumptions and allocating huge budgets upfront, we should quickly create an MVP for you, take it to the market, collect feedback and reiterate fast!</p>
          </div>
          <div className="col">
            <div className="row gx-md-5">
              <div className="col">
                <p className="text-center infographics"><span className="info-digit full-width">54</span>Clients reached their goals</p>
                <p className="text-center infographics"><span className="info-digit full-width">24+</span>High-skilled employees</p>
              </div>
              <div className="col">
                <p className="text-center infographics"><span className="info-digit full-width">83%</span>Net promoter score</p>
                <p className="text-center infographics"><span className="info-digit full-width">4</span>Years of remote development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="our-team pt-10 pb-3">
      <div className="container">
        <h2 className="pb-3">Our <span className="highlighted">team</span></h2>
        <div className="row row-cols-2 row-cols-md-4 mb-2 pb-2">
          <div className="col team-card">
            <img src={andrewZaikin} alt="development-services"></img>
            <h3 className="teammate-name">Andrew Zaikin</h3>
            <small className="text-muted">Founder, CEO</small>
          </div>
          <div className="col team-card">
            <img src={anastasiaZhivaeva} alt="development-services"></img>
            <h3 className="teammate-name">Anastasia Zhivaeva</h3>
            <small className="text-muted">CTO</small>
          </div>
          <div className="col team-card">
            <img src={victorKolesnikov} alt="development-services"></img>
            <h3 className="teammate-name">Victor Kolesnikov</h3>
            <small className="text-muted">Senior Software Engineer</small>
          </div>
          <div className="col team-card">
            <img src={anastasiaDziova} alt="development-services"></img>
            <h3 className="teammate-name">Anastasia Dziova</h3>
            <small className="text-muted">HR Manager</small>
          </div>
        </div>
        <button className="btn btn-bordered full-width">Join us</button>
      </div>
    </div>

    <div className="facts pt-10 pb-3">
      <div className="container">
        <h2 className="text-center">Facts about us</h2>
        <div className="row row-cols-2 row-cols-md-5">
          <div className="col">
            <div className="fact-item guitar-players">
              <span className="fact-digit">6</span>
              <p className="fact-text">Guitar<br/>players</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item longboard">
              <span className="fact-digit">5</span>
              <p className="fact-text">Longboard<br/>riders</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item sport-lovers">
              <span className="fact-digit">10</span>
              <p className="fact-text">Sport lovers</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item average-age">
              <span className="fact-digit">26</span>
              <p className="fact-text">Average<br/>age</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item pet-owners">
              <span className="fact-digit">11</span>
              <p className="fact-text">Pet<br/>owners</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item coffee-ammount">
              <span className="fact-digit">3</span>
              <p className="fact-text">kg coffee<br/>per month</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item board-games">
              <span className="fact-digit">15</span>
              <p className="fact-text">Board games<br/>in the office</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item mango-fans">
              <span className="fact-digit">8</span>
              <p className="fact-text">Mango<br/>fans</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item husky-listener">
              <span className="fact-digit">1</span>
              <p className="fact-text">Husky<br/>listener</p>
            </div>
          </div>
          <div className="col">
            <div className="fact-item programming">
              <span className="fact-digit">7</span>
              <p className="fact-text">Programming<br/>languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="development-services bg-white">
      <div className="container">
        <div className="row gx-md-5">
          <div className="col-lg-4">
            <h2 className="d-s-heading"><span className="highlighted">Full cycle</span> of development<br/>services</h2>
          </div>
          <div className="col-lg-8">
            <div className="row gx-md-5">
              <div class="col-lg-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
              </div>
              <div class="col-lg-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block pt-5 pt-md-1">
          <img src={require("../images/about/dev-services/d_s_group_sm.png")} alt="development-services" className="d-block d-md-none"></img>
          <img src={require("../images/about/dev-services/d_s_group.png")} alt="development-services" className="d-none d-md-block"></img>
        </div>
      </div>
    </div>

    <div className="our-life bg-white pt-10 pb-5">
      <div className="container">
        <h2 className="text-center">Our <span className="highlighted">life</span></h2>
        <p className="text-center">Unlike most other firms, we take business needs first, 
        <br/>making cutting-edge tech work for the goals of your company.</p>
      </div>
    </div>

    <div className="bg-white pb-5">
      <div className="container">
        <div className="business-growth">
          <div className="row gx-md-5">
            <div className="col-md-6">
              <h2>Are you ready for your business growth? </h2>
              <p>Let&#39;s move your business forward to the clouds! Tell us about your idea! We will interview you and offer the best solution for reaching the goal.</p>
              <button className="btn">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
