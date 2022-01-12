import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.scss';
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
      <div>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/components">Components</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/cases">Cases</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/case">Case</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contacts">Contacts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/service">Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/technologies">Technologies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
          </li>

        </ul>

        {/* A <Routes> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/case" element={<Case />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/components" element={<Components />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/process" element={<Process />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
