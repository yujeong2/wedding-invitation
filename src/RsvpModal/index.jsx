/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
import React, { useState } from 'react';

import closeIcon from '../assets/icons/close.png';

function RsvpModal({ setRsvpModal }) {
  const [data, setData] = useState({
    name: '',
    phone: '',
    count: '',
    party: '',
    dining: 'yes',
  });

  const handleClickSubmit = () => {
    setRsvpModal(false);
  };

  const handleChangeData = (type, value) => {
    setData((curData) => {
      const newData = { ...curData };
      newData[type] = value;
      return newData;
    });
  };

  return (
    <div className="rsvp-modal-wrapper">
      <div className="modal-background">
        <div className="modal">
          <div className="title-wrapper">
            <div className="title">참석 의사 전달</div>
            <button type="button" onClick={handleClickSubmit}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className="form-wrapper">
            <div className="form-item">
              <div className="form-label">성함</div>
              <div className="form-content">
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => handleChangeData('name', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">연락처</div>
              <div className="form-content">
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => handleChangeData('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">참석인원</div>
              <div className="form-content">
                <input
                  type="number"
                  value={data.count}
                  onChange={(e) => handleChangeData('count', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">동행인</div>
              <div className="form-content">
                <input
                  type="text"
                  value={data.party}
                  onChange={(e) => handleChangeData('party', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">식사여부</div>
              <div className="form-content">
                <button
                  type="button"
                  className={`dining ${data.dining === 'yes' ? 'active' : ''}`}
                  onClick={() => handleChangeData('dining', 'yes')}
                >
                  예정
                </button>
                <button
                  type="button"
                  className={`dining ${data.dining === 'no' ? 'active' : ''}`}
                  onClick={() => handleChangeData('dining', 'no')}
                >
                  안함
                </button>
                <button
                  type="button"
                  className={`dining ${
                    data.dining === 'undefined' ? 'active' : ''
                  }`}
                  onClick={() => handleChangeData('dining', 'undefined')}
                >
                  미정
                </button>
              </div>
            </div>
          </div>
          <button type="button" onClick={handleClickSubmit}>
            참석 의사 전달하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RsvpModal;
