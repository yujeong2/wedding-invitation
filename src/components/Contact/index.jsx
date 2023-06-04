/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React from 'react';
import groomImg from '../../assets/photo/groom.jpg';
import brideImg from '../../assets/photo/bride.jpg';

function Contact() {
  return (
    <div className="contact">
      <div className="sub-title">Contact</div>
      <div className="title">전화로 축하를 전해주세요</div>
      <div className="contact-wrapper">
        <div className="contact-item">
          <img src={groomImg} alt="" />
          <div className="text">
            <span>신랑, </span>
            김지환
          </div>
          <div className="contact-button-wrapper">신랑에게 연락하기</div>
        </div>
        <div className="contact-item">
          <img src={brideImg} alt="" />
          <div className="text">
            <span>신부, </span>
            최유정
          </div>
          <div className="contact-button-wrapper">신부에게 연락하기</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
