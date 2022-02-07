import React from "react";
import Modal from 'react-modal';
import closeIcon from "../../images/closeIcon.svg"
import paperclip from "../../images/paperclip.svg"
import "./styles.scss";

export const ContactUsModal = ({closeModal, title}) => {
  const [modalIsSubmit, setIsSubmit] = React.useState(false);

  function getFileName({target}) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
  }

  let name = '', email = '', phone = '', file = '', project = '', agree = false;

  function sendMessage() {
    console.log(name, email, phone, file, project, agree);
    setIsSubmit(true);
  }

  return (
    <div className="container">
      <Modal
        isOpen={modalIsSubmit}
        onRequestClose={closeModal}
        className="submitModal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div className='modalIsSubmit'>
          <h3>Thank you for the request</h3>
          <button onClick={closeModal} className="btn btn-accent">Okay</button>
        </div>
      </Modal>
      <div className="row contactUsModal">
        <div className='col-9 text-start'>
          <h3>{title}</h3>
        </div>
        <div className='col text-end'>
          <img className='closeButton' onClick={() => closeModal()} src={closeIcon} alt="Close"/>
        </div>
        <form>
          <label htmlFor="name" className="form-label">Full name *</label>
          <input type="text" className="form-control" id="name"
                 onInput={(event) => name = event.target.value}/>
          <div className='row'>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="email" className="form-label">Email address *</label>
              <input type="email" className="form-control" id="email"
                     onInput={(event) => email = event.target.value}/>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="phone" className="form-label">Phone number (optional)</label>
              <input type="tel" className="form-control" id="phone"
                     onInput={(event) => phone = event.target.value}/>
            </div>
          </div>
          <div className="col">
            <label htmlFor="inputFile" className="form-label">File *</label>
            <div className="inputFile-box">
              <label htmlFor="inputFile">
                <div className="file-button">
                  <img src={paperclip} alt=""/>
                  <span id="file-name" className="file-box">Attach file</span>
                </div>
              </label>
              <input type="file" className="form-control inputFile" id="inputFile"
                     onChange={(event) => {
                       getFileName(event);
                       file = event.target.value;
                     }}/>
            </div>
          </div>
          <div className="col">
            <label htmlFor="project" className="form-label">Describe your project</label>
            <textarea className="form-control" id="project"
                      onInput={(event) => project = event.target.value}/>
          </div>
          <div className="col form-check privacyPolicy">
            <input className="form-check-input" type="checkbox" id="agree"
                   onClick={() => agree = !agree}
            />
            <label className="form-check-label" htmlFor="agree">
              I agree with <a href="/">Privacy Policy Politic</a> which use on this site
            </label>
          </div>
        </form>
        <div className="col text-end">
          <button onClick={sendMessage} className="btn btn-accent">Send message</button>
        </div>
      </div>
    </div>
  )
}

