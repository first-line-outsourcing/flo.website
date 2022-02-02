import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Home.scss';
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
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }
  //
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  //
  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <main>
      <section className="container top-section">
        <div className="row">
          <div className="col-7">
            <h1 className="neon">Move <span>your business</span> forward</h1>
            <p>Cloud web and mobile development based on serverless architecture for reaching your business goals </p>
            <Link className="btn btn-accent" to="/services">What we do</Link>
          </div>
          <div className="col-5">img</div>
        </div>
      </section>
      <section className="container numbers">
        <div className="row">
          <div className="col">
            <p className="neon"><span>54</span></p>
            <p>Clients reached their goals</p>
          </div>
          <div className="col">
            <p className="neon"><span>83%</span></p>
            <p>Net promoter score</p>
          </div>
          <div className="col">
            <p className="neon"><span>20+</span></p>
            <p>High-skilled employees</p>
          </div>
          <div className="col">
            <p className="neon"><span>4</span></p>
            <p>Years of remote development</p>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2>About us</h2>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-6">
                  <p>We’ve already helped our clients from media, broadcasting, entertainment, stock market clients,
                     hiring, legal services. Maybe it’s your turn! </p>
                </div>
                <div className="col-6">
                  <p>Love to work with/Already helped funded startups, ambitious small and medium-sized companies.
                  </p>
                </div>
                <div className="col-6">
                  <p>We do not just design solutions but solve business problems for your business development.</p>
                </div>
                <div className="col-6">
                  <p>Develop web and mobile apps – from idea to launch! </p>
                </div>
                <div className="col-6">
                  <p>We use modern, flexible frameworks for your convenient cooperation with us.</p>
                </div>
                <div className="col-6">
                  <p>Help to expand the business by using cloud solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h2 className="neon">Our <span>services</span></h2>
              <p>We provide high-quality services to help your business grow. We aren’t about just closing tickets in
                 Jira – we help your business to conquer new heights!</p>
            </div>
            <div className="col-7">

            </div>
          </div>
        </div>
      </section>
      <section className="cases">
        <h2>Featured <span>case</span> studies</h2>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="" alt="" className='img-thumbnail d-block' />
              <h4>Writer Chrome Extension</h4>
              <ul className='tech'>
                <li><img src="" alt="" /><span>Android</span></li>
                <li><img src="" alt="" /><span>iOS</span></li>
                <li><img src="" alt="" /><span>Web</span></li>
              </ul>
            </div>
            <div className="col-6">
              <img src="" alt="" className='img-thumbnail d-block' />
              <h4>Writer Chrome Extension</h4>
              <ul className='tech'>
                <li><img src="" alt="" /><span>Android</span></li>
                <li><img src="" alt="" /><span>iOS</span></li>
                <li><img src="" alt="" /><span>Web</span></li>
              </ul>
            </div>
            <div className="col-6">
              <img src="" alt="" className='img-thumbnail d-block' />
              <h4>Writer Chrome Extension</h4>
              <ul className='tech'>
                <li><img src="" alt="" /><span>Android</span></li>
                <li><img src="" alt="" /><span>iOS</span></li>
                <li><img src="" alt="" /><span>Web</span></li>
              </ul>
            </div>
            <div className="col-6">
              <img src="" alt="" className='img-thumbnail d-block' />
              <h4>Writer Chrome Extension</h4>
              <ul className='tech'>
                <li><img src="" alt="" /><span>Android</span></li>
                <li><img src="" alt="" /><span>iOS</span></li>
                <li><img src="" alt="" /><span>Web</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Link className='btn btn-accent a-center' to='/cases'>See more</Link>
        </div>
      </section>
      <section className='serverless'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <h2 className='neon'>Serverless and Cloud computing <span>evangelists</span></h2>
              <p>We’re experts at Serverless development and help our clients don’t think about infrastructure management. This model allows you to pay just for usage of cloud resources. No wasting money for containers or instances anymore.</p>
              <p>Event-driven architecture allows to keep your solution highly scalable and reliable. Focus on your business challenges with cost-effective solution. we will help you with a quick scale!</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <nav className="nav nav-pills nav-justified">
                <a className="nav-link active" aria-current="page" href="#">Amazon Web Services</a>
                <a className="nav-link" href="#">Google Cloud Platform</a>
                <a className="nav-link" href="#">Microsoft Azure</a>
                <a className="nav-link" href="#">IBM Cloud</a>
              </nav>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="row">
                <div className="col-6">hybrid deployment</div>
                <div className="col-6">analytical service with templates</div>
                <div className="col-6">minimal financial losses during the launch of new projects</div>
                <div className="col-6">multiple payment options</div>
                <div className="col-6">regional and zonal coverage</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col grow">
              <div className="row">
                <div className="col">
                  <h4>Are you ready for your business growth?</h4>
                  <p>Let’s move your business forward to the clouds! Tell us about your idea! We will interview you and offer the best solution for reaching the goal. </p>
                  <button className="btn btn-accent">Contact us</button>
                </div>
                <div className="col">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='testimonials'>
        <h3 className='a-center'>Client testimonials</h3>

      </section>
    </main>
  )
}
/*
 * <button onClick={openModal}>Open Modal</button>
 <Modal
 isOpen={modalIsOpen}
 onAfterOpen={afterOpenModal}
 onRequestClose={closeModal}
 style={customStyles}
 contentLabel="Example Modal"
 >
 <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
 <button onClick={closeModal}>close</button>
 <div>I am a modal</div>
 <form>
 <input />
 <button>tab navigation</button>
 <button>stays</button>
 <button>inside</button>
 <button>the modal</button>
 </form>
 </Modal>
 *
 * */
