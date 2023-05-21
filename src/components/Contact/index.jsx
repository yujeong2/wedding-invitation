/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React from 'react';

function Contact() {
  return (
    <div className="calendar">
      <div className="title">Contact</div>
      <div className="date">23년 9월 9일 토요일 오후 2시 30분</div>
      <div className="location">엘리에나호텔 컨벤션홀(2F)</div>
      <div className="calendar-wrapper">
        <div className="dayname">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid" />
      </div>
    </div>
  );
}

export default Contact;
