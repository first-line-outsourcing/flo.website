import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import './Home.scss';
import {ContactUsModal} from "../components/contactUsModal";
import headingImg from '../images/home/home_heading_video_img.png';
import caseThumb from '../images/home/case_thumb_1.png';
import caseThumbTwo from '../images/home/case_thumb_2.png';
import iconAndroid from '../images/icons/icon_android.svg';
import iconIOS from '../images/icons/icon_ios.svg';
import iconWeb from '../images/icons/icon_web.svg';
import iconReact from '../images/icons/icon_react.svg';
import servicesSlide from '../images/home/swiper/slide_1.jpg';
import servicesSlideTwo from '../images/home/swiper/slide_2.jpg';
import clientMedia from '../images/home/swiper/client_media.png';
import clientPhoto from '../images/home/swiper/client_photo.png';

Modal.setAppElement('#root');
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }
  return (
    <main className="overflow-hidden-sm">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <ContactUsModal closeModal={closeModal}/>
      </Modal>
      <section className="container top-section">
        <div className="row">
          <div className="col-7">
            <h1 className="neon">Move <span>your business</span> forward</h1>
            <p>Cloud web and mobile development based on serverless architecture for reaching your business goals </p>
            <Link className="btn btn-accent" to="/services">What we do</Link>
      <section className="top-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>Move <span className="highlighted">your business</span> forward</h1>
              <p>Cloud web and mobile development based on serverless architecture for reaching your business goals </p>
              <Link className="btn btn-accent full-width-md" to="/services">What we do</Link>
            </div>
            <div className="col-md-5 text-end">
              <div className="image-container"><img src={headingImg} alt="move your business"></img></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container numbers">
        <div className="row">
          <div className="col-6 col-md-3 text-center">
            <p className="info-digit"><span className="highlighted">54</span></p>
            <p>Clients reached their goals</p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <p className="info-digit"><span className="highlighted">83%</span></p>
            <p>Net promoter score</p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <p className="info-digit"><span className="highlighted">20+</span></p>
            <p>High-skilled employees</p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <p className="info-digit"><span className="highlighted">4</span></p>
            <p>Years of remote development</p>
          </div>
        </div>
      </section>
      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <h2>About us</h2>
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="row gx-0">
                <div className="col-md-6 bordered">
                  <p>We&#39;ve already helped our clients from media, broadcasting, entertainment, stock market clients,
                     hiring, legal services. Maybe it&#39;s your turn! </p>
                </div>
                <div className="col-md-6 bordered">
                  <p>Love to work with/Already helped funded startups, ambitious small and medium-sized companies.
                  </p>
                </div>
                <div className="col-md-6 bordered">
                  <p>We do not just design solutions but solve business problems for your business development.</p>
                </div>
                <div className="col-md-6 bordered">
                  <p>Develop web and mobile apps – from idea to launch! </p>
                </div>
                <div className="col-md-6 bordered">
                  <p>We use modern, flexible frameworks for your convenient cooperation with us.</p>
                </div>
                <div className="col-md-6 bordered">
                  <p>Help to expand the business by using cloud solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="container">
          <div className="services-text-container">
              <h2>Our <span className="highlighted">services</span></h2>
              <p>We provide high-quality services to help your business grow. We aren&#39;t about just closing tickets in
                 Jira – we help your business to conquer new heights!</p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            slidesPerGroup={1}
            navigation={true}
            breakpoints={{
              250: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.4,
              },
              1900: {
                slidesPerView: 3.5,
              }
            }}
            modules={[Navigation]}
            className="mySwiper services-swiper">
            <SwiperSlide>
              <Link to="/services">
                <img src={servicesSlide} alt="High-quality services" className="slide-image"></img>
                <h3>Web dev</h3>
                <p>SaaS, single page applications, progressive web applications</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/services">
                <img src={servicesSlideTwo} alt="Mobile apps" className="slide-image"></img>
                <h3>Mobile apps</h3>
                <p>iOS, Android apps with Flutter</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/services">
                <img src={servicesSlide} alt="High-quality services" className="slide-image"></img>
                <h3>Tech Design </h3>
                <p>Business Analysis, Wireframes, Architecture</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/services">
                <img src={servicesSlideTwo} alt="Mobile apps" className="slide-image"></img>
                <h3>Mobile apps</h3>
                <p>iOS, Android apps with Flutter</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/services">
                <img src={servicesSlide} alt="High-quality services" className="slide-image"></img>
                <h3>Tech Design </h3>
                <p>Business Analysis, Wireframes, Architecture</p>
              </Link>
            </SwiperSlide>
          </Swiper>
          </div>
      </section>
      <section className="cases-section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-8">
              <h2 className="text-center">Featured <span className="highlighted">case</span> studies</h2>
              <div className="row gx-lg-5">
                <div className='col-md-6 case-item'>
                  <Link to='/cases'>
                    <img src={caseThumb} alt="" className="case-thumbnail" />
                    <h3>Writer Chrome Extension</h3>
                  </Link>
                  <ul className='tech-list'>
                    <li><img src={iconAndroid} alt="Android" className="icon-tech"></img><span>Android</span></li>
                    <li><img src={iconIOS} alt="iOS" className="icon-tech"></img><span>iOS</span></li>
                    <li><img src={iconWeb} alt="Web" className="icon-tech"></img><span>Web</span></li>
                    <li><img src={iconReact} alt="React" className="icon-tech"></img><span>React</span></li>
                  </ul>
                </div>

                <div className='col-md-6 case-item'>
                  <Link to='/cases'>
                    <img src={caseThumbTwo} alt="" className="case-thumbnail" />
                    <h3>Writer Chrome Extension</h3>
                  </Link>
                  <ul className='tech-list'>
                    <li><img src={iconAndroid} alt="Android" className="icon-tech"></img><span>Android</span></li>
                    <li><img src={iconIOS} alt="iOS" className="icon-tech"></img><span>iOS</span></li>
                    <li><img src={iconWeb} alt="Web" className="icon-tech"></img><span>Web</span></li>
                    <li><img src={iconReact} alt="React" className="icon-tech"></img><span>React</span></li>
                  </ul>
                </div>

                <div className='col-md-6 case-item'>
                  <Link to='/cases'>
                    <img src={caseThumbTwo} alt="" className="case-thumbnail" />
                    <h3>Writer Chrome Extension</h3>
                  </Link>
                  <ul className='tech-list'>
                    <li><img src={iconAndroid} alt="Android" className="icon-tech"></img><span>Android</span></li>
                    <li><img src={iconIOS} alt="iOS" className="icon-tech"></img><span>iOS</span></li>
                    <li><img src={iconWeb} alt="Web" className="icon-tech"></img><span>Web</span></li>
                    <li><img src={iconReact} alt="React" className="icon-tech"></img><span>React</span></li>
                  </ul>
                </div>

                <div className='col-md-6 case-item'>
                  <Link to='/cases'>
                    <img src={caseThumb} alt="" className="case-thumbnail" />
                    <h3>Writer Chrome Extension</h3>
                  </Link>
                  <ul className='tech-list'>
                    <li><img src={iconAndroid} alt="Android" className="icon-tech"></img><span>Android</span></li>
                    <li><img src={iconIOS} alt="iOS" className="icon-tech"></img><span>iOS</span></li>
                    <li><img src={iconWeb} alt="Web" className="icon-tech"></img><span>Web</span></li>
                    <li><img src={iconReact} alt="React" className="icon-tech"></img><span>React</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-3">
            <Link className='btn btn-accent a-center' to='/cases'>See more</Link>
          </div>
        </div>
      </section>
      <section className='serverless'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 text-md-center">
              <h2>Serverless and Cloud computing <span className="highlighted">evangelists</span></h2>
              <p>We&#39;re experts at Serverless development and help our clients don&#39;t think about infrastructure management. This model allows you to pay just for usage of cloud resources. No wasting money for containers or instances anymore.</p>
              <p>Event-driven architecture allows to keep your solution highly scalable and reliable. Focus on your business challenges with cost-effective solution. we will help you with a quick scale!</p>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <nav className="nav nav-pills gx-2">
                <a className="nav-link active" aria-current="page" href="#">Amazon Web Services</a>
                <a className="nav-link" href="#">Google Cloud Platform</a>
                <a className="nav-link" href="#">Microsoft Azure</a>
                <a className="nav-link" href="#">IBM Cloud</a>
              </nav>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="row bullet-list">
                <li className="col-md-6"><p>hybrid deployment</p></li>
                <li className="col-md-6"><p>analytical service with templates</p></li>
                <li className="col-md-6"><p>minimal financial losses during the launch of new projects</p></li>
                <li className="col-md-6"><p>multiple payment options</p></li>
                <li className="col-md-6"><p>regional and zonal coverage</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container ">
        <div className="business-growth">
          <div className="row gx-md-5">
            <div className="col-md-6">
              <h2>Are you ready for your business growth? </h2>
              <p className="mb-4">Let&#39;s move your business forward to the clouds! Tell us about your idea! We will interview you and offer the best solution for reaching the goal.</p>
              <button className="btn">Contact us</button>
            </div>
          </div>
        </div>
      </div>
      <section className='testimonials bg-white'>
        <div className="container">
          <h2 className='text-center'>Client <span className="highlighted">testimonials</span></h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-8">
                <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
                <div className="client-card">
                  <img src={clientPhoto} alt="client-name" className="client-photo"></img>
                  <div className="client-data">
                    <h5>Bar Rubinstein</h5>
                    <p>Product engineering and Director of Strategic Partnerships and Integration at Svenn</p>
                  </div>
                </div>
                </div>
                <div className="col-md-4 media">
                  <img src={clientMedia} alt="client-media" className="slide-image"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="row">
                <div className="col-md-8">
                  <p className="slide-text">Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>
                  <div className="client-card">
                    <img src={caseThumb} alt="client-name" className="client-photo"></img>
                    <div className="client-data">
                      <h5>Gustav Klimt</h5>
                      <p>Product engineering and Director of Strategic Partnerships and Integration at Svenn</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 media">
                  <img src={headingImg} alt="client-media" className="slide-image"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-8">
                  <p className="slide-text">I would do whatever I wanted to do, with whomever I wanted to do it with.<br/>This is monsters and magic and nothing we were ever trained for<br/>Thank you for your cooperation.</p>
                  <div className="client-card">
                    <img src={headingImg} alt="client-name" className="client-photo"></img>
                    <div className="client-data">
                      <h5>Natasha Romanoff</h5>
                      <p>Founding member of the Avengers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 media">
                  <img src={clientMedia} alt="client-media" className="slide-image"></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  )
}
