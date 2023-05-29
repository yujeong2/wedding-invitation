/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="title">Contact</div>
      <div className="contact-wrapper">
        <div className="contact-item">
          {/* <img src={} alt=""/> */}
          <div className="text">
            <span>신랑, </span>
            김지환
          </div>
        </div>
        <div className="contact-item">
          {/* <img src={} alt=""/> */}
          <div className="text">
            <span>신부, </span>
            최유정
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
