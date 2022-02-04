import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.scss';
import logo from './images/Logo.svg';
import map from './images/map.svg';

import ScrollToTop from "./helper/ScrollToTop";
import About from './pages/About';
import Case from './pages/Case';
import Cases from './pages/Cases';
import Components from './pages/Components';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Process from './pages/Process';
import Service from './pages/Service';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Technology from './pages/Technology';
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" aria-current="page" to="/">
                <img src={logo} alt="" width={76} />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
              </button>
              <div className="d-flex">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/services">Our services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/technologies">Technologies</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/components">Components</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/cases">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/contacts">Contacts</Link>
                    </li>
                    {/*<li className='nav-item'>*/}
                    {/*  <Link className='nav-link' aria-current='page' to='/case'>Case</Link>*/}
                    {/*</li>*/}
                    {/*<li className='nav-item'>*/}
                    {/*  <Link className='nav-link' aria-current='page' to='/service'>Service</Link>*/}
                    {/*</li>*/}
                    {/*<li className='nav-item'>*/}
                    {/*  <Link className='nav-link' aria-current='page' to='/technology'>Technology</Link>*/}
                    {/*</li>*/}
                  </ul>
                  <button type={'button'} className="btn btn-accent">Contact us</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>


      {/* A <Routes> looks through its children <Route>s and
       renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/case" element={<Case />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/components" element={<Components />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<Service />} />
        <Route path="/technologies" element={<Technologies />} />
        {/*<Route path="/technology" element={<Technology />} />*/}
        <Route path="/technology/:technologyName" element={<Technology />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <div className="contact-us">
        <img className="map" src={map} alt="" />
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="neon">
                Contact <span>us</span>
              </h3>
            </div>
            <div className="col">
              <form className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">Full name</label>
                  <input type="text" className="form-control" id="name" placeholder=""/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone number (optional)</label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">File</label>
                  <input type="file" className="form-control" id="inputAddress2"
                         placeholder="Attach a file"/>
                </div>
                <div className="col-12">
                  <label htmlFor="project" className="form-label">Describe your project</label>
                  <textarea className="form-control" id="project"
                         placeholder=""/>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="agree"/>
                      <label className="form-check-label" htmlFor="agree">
                        I agree with Privasy Policy Politic which use on this site
                      </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-accent">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="" width={116} />
            </div>
            <div className="col">
              <h6>Contacts</h6>
              <p>First Line Outsorsing</p>
              <p><a href="mailto:hello@flo.team">hello@flo.team</a></p>
              <p><a href="tel:+79996384544">+7 (999) 638-45-44</a></p>
              <p>Russia, Krasnodar Oktabrskaya 141</p>
            </div>
            <div className="col">
              <h6>Company</h6>
              <p><Link aria-current="page" to="/about">About us</Link></p>
              <p><a aria-current="page" href="https://medium.com/firstlineoutsourcing">Blog</a></p>
              <p><Link aria-current="page" to="/hiring">Hiring</Link></p>
              <p><Link aria-current="page" to="/cases">Portfolio</Link></p>
            </div>
            <div className="col">
              <h6>Development</h6>
              <p><Link aria-current="page" to="/services">Frontend development</Link></p>
              <p><Link aria-current="page" to="/services">Backend development</Link></p>
              <p><Link aria-current="page" to="/services">Mobile development</Link></p>
              <p><Link aria-current="page" to="/services">QA Automation</Link></p>
            </div>
            <div className="col">
              <h6>Services</h6>
              <p><Link aria-current="page" to="/services">Amazon Web Services</Link></p>
              <p><Link aria-current="page" to="/services">Google Cloud Platform</Link></p>
              <p><Link aria-current="page" to="/services">Microsoft Azure</Link></p>
              <p><Link aria-current="page" to="/services">IBM Cloud</Link></p>
            </div>
            <div className="col">
              <div className="social">

              </div>
              <div className="clutch">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
);
}
