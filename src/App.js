import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import logo from './images/Logo.svg';

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

export default function App() {
  return (
    <Router>
      <div className={'container'}>
        <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <Link className={'navbar-brand'} aria-current='page' to='/'>
              <img src={logo} alt='' width={76} />
            </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false'
                    aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'> </span>
            </button>
            <div className={'d-flex'}>
              <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/services'>Our services</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/technologies'>Technologies</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/components'>Components</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/cases'>Portfolio</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/about'>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/contacts'>Contacts</Link>
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
                <button type={'button'} className='btn btn-accent'>Contact us</button>
              </div>
            </div>
          </div>

        </nav>

        {/* A <Routes> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/case' element={<Case />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/components' element={<Components />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/process' element={<Process />} />
          <Route path='/service' element={<Service />} />
          <Route path='/services' element={<Services />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
