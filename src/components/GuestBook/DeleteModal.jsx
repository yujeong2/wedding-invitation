/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import closeIcon from '../../assets/icons/close.png';
import { GUSETBOOK_SHEET_ID } from '../../assets/keys';
import { getGoogleSheet } from '../../hooks/useGoogleSheet';

function GuestBookModal({
  guestbookList,
  setGuestbookList,
  deleteModal,
  setDeleteModal,
}) {
  const [data, setData] = useState('');
  const notify = () => {
    toast.error('비밀번호가 틀립니다.', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClickSubmit = async () => {
    if (guestbookList[deleteModal].password !== 'data') {
      notify();
    } else {
      const googleSheet = await getGoogleSheet();
      const sheetsByIdElement = googleSheet.sheetsById[GUSETBOOK_SHEET_ID];
      const newRows = await sheetsByIdElement.getRows();
      await newRows[deleteModal].delete();

      setGuestbookList((curList) => {
        const newList = [...curList];
        newList.splice(deleteModal, 1);
        return newList;
      });
      setDeleteModal(false);
    }
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
        <div className="rsvp-modal delete">
          <div className="title-wrapper">
            <div className="title">메세지 삭제</div>
            <button type="button" onClick={() => setDeleteModal('')}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className="form-wrapper">
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
          </div>
          <button type="button" onClick={handleClickSubmit}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestBookModal;
