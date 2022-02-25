import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import './header.scss';

import logo from '../../images/Logo.svg';

export default function StickyHeader() {
    const [scroll, setScroll] = useState(false);

    const [clicked, setClicked, remove] = useState('');

    const showNavbar = () => {
        clicked ? setClicked('') : setClicked('navbar navbar-expand-lg show-navbar');
    };

    const hideNavbar = () => {
        clicked ? setClicked('') : remove('navbar-expand-lg');
    };
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
  
    return (
        <header className = {scroll ? "sticky-header header-scroll" : "sticky-header header-top"}>
            <nav className={clicked || 'navbar navbar-expand-lg' }>
                <div className="container-fluid container-lg">
                    <Link className="navbar-brand" aria-current="page" to="/" onClick={hideNavbar}>
                        <img src={logo} alt="" width={76} />
                    </Link>
                    <div className='d-inline-flex'>
                        <button type={'button'} className="contact-button-sm"><span className='icon-envelope'></span></button>
                        <button className="navbar-toggler" 
                                onClick={showNavbar}
                                type="button">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                    <div className="navbar-collapsible">
                        <ul className="navbar-nav me-auto" onClick={hideNavbar}>
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
                        <button type={'button'} className="btn btn-accent contact-button">Contact us <span className='icon-arrow-right'></span></button>
                    </div>
                </div>
            </nav>
        </header>
    );
  };