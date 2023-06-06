/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
import React, { useState } from 'react';
import { isMobileOnly } from 'react-device-detect';

import closeIcon from '../../assets/icons/close.png';
import { getGoogleSheet } from '../../hooks/useGoogleSheet';

function RsvpModal({ setRsvpModal }) {
  const [data, setData] = useState({
    name: '',
    phone: '',
    count: 1,
    dining: 'yes',
  });

  const handleGoogleSheetAddRow = async (row) => {
    const googleSheet = await getGoogleSheet();
    const sheetsByIdElement = googleSheet.sheetsById[0];
    await sheetsByIdElement.addRow(row);
  };

  const handleClickSubmit = () => {
    setRsvpModal(false);
    handleGoogleSheetAddRow(data);
  };

  const handleChangeData = (type, value) => {
    setData((curData) => {
      const newData = { ...curData };
      newData[type] = value;
      return newData;
    });
  };

  const handleCountChange = (value) => {
    setData((curData) => {
      const newData = { ...curData };
      newData.count = curData.count + value;
      return newData;
    });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-background">
        <div className={`rsvp-modal ${isMobileOnly ? 'mobile' : 'web'}`}>
          <div className="title-wrapper">
            <div className="title">참석 의사 전달</div>
            <button type="button" onClick={() => setRsvpModal(false)}>
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
                  placeholder="대표자 한 분의 성함"
                  onChange={(e) => handleChangeData('name', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">연락처 뒷자리</div>
              <div className="form-content">
                <input
                  type="text"
                  value={data.phone}
                  placeholder="동명이인 구분을 위해 수집합니다"
                  onChange={(e) => handleChangeData('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">참석인원</div>
              <div className="form-content">
                <input
                  className="count-input"
                  type="number"
                  pattern="\d*"
                  value={data.count}
                  placeholder="본인 포함 참석 인원"
                  onChange={(e) => handleChangeData('count', e.target.value)}
                />
                <button
                  disabled={data.count === 1}
                  type="button"
                  className="counter"
                  onClick={() => handleCountChange(-1)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="counter"
                  onClick={() => handleCountChange(1)}
                >
                  +
                </button>
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
                  🙆 먹어요
                </button>
                <button
                  type="button"
                  className={`dining ${data.dining === 'no' ? 'active' : ''}`}
                  onClick={() => handleChangeData('dining', 'no')}
                >
                  🙅 안먹어요
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
