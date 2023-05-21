/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React from 'react';
import useGoogleSheet from '../../hooks/useGoogleSheet';

function GuestBook() {
  const [rows] = useGoogleSheet(1132076889);

  return (
    <div className="guestbook">
      <div className="title">Guest Book</div>
      <div className="guestbook-list">
        {rows.map((o) => (
          <div className="guestbook-item" key={o.rowNumber}>
            <div className="item-top">
              <div className="name">{o.name}</div>
              <div className="date">{o.date}</div>
            </div>
            <div className="item-content">{o.content}</div>
          </div>
        ))}
      </div>
      <div className="guestbook-add">작성하기</div>
    </div>
  );
}

export default GuestBook;
