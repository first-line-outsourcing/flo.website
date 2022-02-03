import React from "react";
import closeIcon from "../../images/closeIcon.svg"
import paperclip from "../../images/paperclip.svg"
import "./styles.scss";

export const ContactUsModal = ({closeModal}) => {
  function uploadFile({target}) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
  }

  return (
    <div className="container contactUsModal">
      <div className="row">
        <div className='col text-start'>
          <h3>Contact us</h3>
        </div>
        <div className='col text-end'>
          <img className='closeButton' onClick={() => closeModal()} src={closeIcon} alt="Close"/>
        </div>
        <form>
          <label htmlFor="name" className="form-label">Full name *</label>
          <input type="text" className="form-control" id="name" placeholder=""/>
          <div className='row'>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="email" className="form-label">Email address *</label>
              <input type="email" className="form-control" id="email"/>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="phone" className="form-label">Phone number (optional)</label>
              <input type="tel" className="form-control" id="phone"/>
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
                     onChange={(event) => uploadFile(event)}/>
            </div>
          </div>
          <div className="col">
            <label htmlFor="project" className="form-label">Describe your project</label>
            <textarea className="form-control" id="project"
                      placeholder=""/>
          </div>
          <div className="col form-check privacyPolicy">
            <input className="form-check-input" type="checkbox" id="agree"/>
            <label className="form-check-label" htmlFor="agree">
              I agree with <a href="/">Privacy Policy Politic</a> which use on this site
            </label>
          </div>
          <div className="col text-end">
            <button type="submit" className="btn btn-accent">Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

