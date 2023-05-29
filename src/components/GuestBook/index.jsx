/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line, react/prop-types */
import React, { useState, useEffect } from 'react';

import WriteModal from './WriteModal';
import DeleteModal from './DeleteModal';

import useGoogleSheet from '../../hooks/useGoogleSheet';
import closeIcon from '../../assets/icons/close.png';

function GuestBook() {
  const [guestbookList, setGuestbookList] = useState([]);
  const [writeModal, setWriteModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState('');

  const [rows] = useGoogleSheet('1132076889');

  useEffect(() => {
    setGuestbookList(rows);
  }, [rows]);

  return (
    <div className="guestbook">
      <div className="sub-title">Guset Book</div>
      <div className="title">축하의 마음을 전해주세요</div>
      <div className="guestbook-list">
        {guestbookList.map((o, index) => (
          <div className="guestbook-item" key={o.rowNumber}>
            <div className="item-top">
              <div className="name">{o.name}</div>
              <div className="date">{o.date}</div>
              <div
                className="delete-icon"
                onClick={() => setDeleteModal(index)}
                aria-hidden="true"
              >
                <img src={closeIcon} alt="" />
              </div>
            </div>
            <div className="item-content">{o.content}</div>
          </div>
        ))}
      </div>
      <div
        className="guestbook-add"
        aria-hidden="true"
        onClick={() => setWriteModal(true)}
      >
        메세지 작성하기
      </div>
      {writeModal && (
        <WriteModal
          setGuestbookList={setGuestbookList}
          setWriteModal={setWriteModal}
        />
      )}
      {deleteModal !== '' && (
        <DeleteModal
          guestbookList={guestbookList}
          setGuestbookList={setGuestbookList}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
        />
      )}
    </div>
  );
}

export default GuestBook;
