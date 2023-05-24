/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
import React, { useState } from 'react';

import closeIcon from '../../assets/icons/close.png';
import { GUSETBOOK_SHEET_ID } from '../../assets/keys';
import { getGoogleSheet } from '../../hooks/useGoogleSheet';

function GuestBookModal({ setGuestbookList, setWriteModal }) {
  const [data, setData] = useState({
    name: '',
    password: '',
    content: '',
  });

  const handleGoogleSheetAddRow = async (row) => {
    const googleSheet = await getGoogleSheet();
    const sheetsByIdElement = googleSheet.sheetsById[GUSETBOOK_SHEET_ID];
    await sheetsByIdElement.addRow(row);
    const newRows = await sheetsByIdElement.getRows();
    setGuestbookList(newRows);
  };

  const handleClickSubmit = () => {
    const today = new Date();
    handleGoogleSheetAddRow({
      ...data,
      date: today.toLocaleDateString(),
    });
    setWriteModal(false);
  };

  const handleChangeData = (type, value) => {
    setData((curData) => {
      const newData = { ...curData };
      newData[type] = value;
      return newData;
    });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-background">
        <div className="rsvp-modal">
          <div className="title-wrapper">
            <div className="title">신랑신부에게 메시지 남기기</div>
            <button type="button" onClick={() => setWriteModal(false)}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className="form-wrapper">
            <div className="form-item">
              <div className="form-label">닉네임</div>
              <div className="form-content">
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => handleChangeData('name', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">비밀번호</div>
              <div className="form-content">
                <input
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChangeData('password', e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="form-label">내용</div>
              <div className="form-content">
                <textarea
                  rows={6}
                  type="text"
                  value={data.content}
                  onChange={(e) => handleChangeData('content', e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type="button" onClick={handleClickSubmit}>
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestBookModal;
