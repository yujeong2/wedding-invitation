/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/destructuring-assignment, react/prop-types */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import kakaopayIcon from '../assets/icons/kakaopay.png';

const accountInfo = {
  groom: {
    type: '신랑측',
    list: [
      {
        type: '신랑',
        name: '김지환',
        bank: '농협은행',
        account: '302-0646-8247-31',
        kakao: 'https://qr.kakaopay.com/Ej8zDFrIE',
      },
      {
        type: '어머니',
        name: '소혜경',
        bank: '농협은행',
        account: '302-0646-8247-31',
      },
    ],
  },
  bride: {
    type: '신부측',
    list: [
      {
        type: '신부',
        name: '최유정',
        bank: '하나은행',
        account: '415-910602-20507',
        kakao: 'https://qr.kakaopay.com/Ej7wwYIgL',
      },
      {
        type: '아버지',
        name: '최흥길',
        bank: '농협은행',
        account: '302-0646-8247-31',
      },
      {
        type: '어머니',
        name: '김경애',
        bank: '농협은행',
        account: '302-0646-8247-31',
      },
    ],
  },
};

function Account(props) {
  const [accountOpen, setAccountOpen] = useState({
    groom: false,
    bride: false,
  });

  const handleOpenAccount = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setAccountOpen((curOpen) => {
      const newOpen = { ...curOpen };
      newOpen[type] = !curOpen[type];
      return newOpen;
    });
  };

  const handleClickKakaoPay = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(item.kakao);
  };

  const handleCopyAccount = () => {
    props.setCopyModal('account');
  };

  return (
    <div className="account">
      <div className="title">마음 전하실 곳</div>
      <div className="account-wrapper">
        {Object.keys(accountInfo).map((type) => (
          <div
            key={type}
            className={`account-item ${type} ${
              accountOpen[type] ? 'open' : ''
            }`}
          >
            <div
              className="account-title"
              aria-hidden="true"
              onClick={(e) => handleOpenAccount(e, type)}
            >
              {accountInfo[type].type}
            </div>
            <div className={`account-content ${type}`}>
              {accountInfo[type].list.map((item) => (
                <div className="account-content-item" key={item.name}>
                  <div className="top">
                    <div className="name">
                      {item.type} <span>{item.name}</span>
                    </div>
                    <div className="account-num">
                      <span>{item.bank}</span>
                      {item.account}
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="kakao"
                      onClick={(e) => handleClickKakaoPay(e, item)}
                      aria-hidden="true"
                    >
                      <img src={kakaopayIcon} alt="" /> 송금
                    </div>
                    <CopyToClipboard
                      text={item.account}
                      onCopy={handleCopyAccount}
                    >
                      <div className="copy">계좌번호 복사</div>
                    </CopyToClipboard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
