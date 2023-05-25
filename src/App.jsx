/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/no-array-index-key,no-nested-ternary, indent  */

import React, { useState, useEffect, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer } from 'react-toastify';

import useScrollFadeIn from './hooks/useScrollFadeIn';

import Account from './components/Account';
import Calendar from './components/Calendar';
import DDay from './components/DDay';
import Information from './components/Information';
import Location from './components/Location';
import RsvpModal from './components/RsvpModal';
import ImageSlide from './components/ImageSlide';
import GuestBook from './components/GuestBook';

import mainImg from './assets/photo/5.jpg';
import linkIcon from './assets/icons/link.png';
import kakaoIcon from './assets/icons/kakao-talk.png';
import purpleImg from './assets/background/purple.png';
import leafImg from './assets/background/leaf.png';
import { GITHUB_LINK, KAKAO_KEY } from './assets/keys';

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '김지환 ♥ 최유정의 결혼식에 초대합니다.',
        description: '2023년 9월 9일 토요일 오후 2시',
        imageUrl: 'https://i.postimg.cc/sgr0RtYW/6.jpg',
        link: {
          mobileWebUrl: GITHUB_LINK,
          webUrl: GITHUB_LINK,
        },
      },
      buttons: [
        {
          title: '지금 확인하기',
          link: {
            mobileWebUrl: GITHUB_LINK,
            webUrl: GITHUB_LINK,
          },
        },
        {
          title: '위치보기',
          link: {
            mobileWebUrl:
              'https://map.naver.com/v5/entry/place/1354448162?c=15,0,0,0,dh',
            webUrl:
              'https://map.naver.com/v5/entry/place/1354448162?c=15,0,0,0,dh',
          },
        },
      ],
    });
  }
};

function App() {
  const inviteRef = useRef(null);
  useScrollFadeIn(inviteRef);

  const [loading, setLoading] = useState(true);

  const [copyModal, setCopyModal] = useState('');
  const [rsvpModal, setRsvpModal] = useState(false);

  const handleCopyOk = () => {
    setCopyModal('link');
  };

  const handleCloseLinkModal = () => {
    setCopyModal('');
  };

  const handleClickRsvp = () => {
    setRsvpModal(true);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className="invitation">
      {loading && (
        <div className="loading">
          <div className="decoration">Our Wedding Day</div>
          <div className="loading-content">유정 🤍 지환</div>
        </div>
      )}
      <div className="header">
        <div className="title">YUJEONG & JIHWAN</div>
        <div className="buttons">
          <CopyToClipboard text={GITHUB_LINK} onCopy={handleCopyOk}>
            <img src={linkIcon} alt="" />
          </CopyToClipboard>
          <div onClick={shareKakao} aria-hidden="true">
            <img src={kakaoIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="main">
          <img src={mainImg} alt="" />
          <div className="info-area">
            <div className="name">
              <div>
                김지환
                <p>KIM JIHWAN</p>
              </div>
              <div>
                최유정
                <p>CHOI YUJEONG</p>
              </div>
            </div>
            <div className="info">
              <div>저희 두 사람의 특별한 시작을</div>
              <div>소중한 분들과 함께하고 싶습니다.</div>
            </div>
          </div>
          <div className="img-decoration">save the date</div>
        </div>
        <div className="invite" ref={inviteRef}>
          {/* <div className="title">Invitation</div> */}
          <div className="text ">
            <img src={purpleImg} alt="" />
            <p>언제나 곁에 함께 있어 주신</p>
            <p>소중한 분들께,</p>
            <p>저희의 첫 시작을 전합니다.</p>
            <br />
            <p>큰 축복 가득 전해주시는</p>
            <p>그 따뜻한 마음을 배워</p>
            <p>한없이 맑을 앞으로의 날들,</p>
            <p>서로 더 아끼고 사랑하며 살겠습니다.</p>
          </div>
        </div>
        <div className="name-wrapper">
          <div className="name">
            {/* <img
                    src="https://mcard.fromtoday.co.kr/mcard/assets/images/icon_flower_chrys_w32.png"
                    alt=""
                  /> */}
            <strong>김호영 · 소혜경</strong>의 <div className="sub">아들</div>
            <span>지환</span>
          </div>
          <div className="name">
            <strong>최흥길 · 김경애</strong>의 <div className="sub">딸</div>
            <span>유정</span>
          </div>
        </div>
        <Calendar />
        <DDay />
        <ImageSlide />
        <Information />
        <Location />
        <Account setCopyModal={setCopyModal} />
        <div className="rsvp">
          <div className="title">참석 의사 전달</div>
          <div className="rsvp-wrapper">
            <img src={leafImg} alt="" />
            <div className="description">
              <p>모든 분들께</p>
              <p>부족함 없는 예식을 준비하기 위해</p>
              <p>참석 및 식사 여부를</p>
              <p>미리 여쭙고자 합니다.</p>
              <br />
              <p>부담없이 알려주시면</p>
              <p>정성껏 준비하겠습니다.</p>
            </div>
            <button className="button" type="button" onClick={handleClickRsvp}>
              참석 의사 전달하기
            </button>
          </div>
        </div>
        <GuestBook />
        <div className="share">
          <CopyToClipboard text={GITHUB_LINK} onCopy={handleCopyOk}>
            <div className="link-share" aria-hidden="true">
              <img src={linkIcon} alt="" />
              링크로 공유하기
            </div>
          </CopyToClipboard>
          <div className="kakao-share" aria-hidden="true" onClick={shareKakao}>
            <img src={kakaoIcon} alt="" />
            카카오로 공유하기
          </div>
        </div>
        <div className="thanks">
          <div className="title">Thanks To</div>
          <div className="thanks-wrapper">
            <div>언제나 곁을 따뜻하게 지켜주시고</div>
            <div>사랑으로 응원해주신</div>
            <div>모든 분들께 감사드립니다.</div>
          </div>
          <div className="copyright">
            Designed & Developed by Yujeong, Jihwan
          </div>
        </div>
      </div>
      {copyModal && (
        <div className="link-copy-modal">
          {copyModal === 'link' ? '링크' : '계좌번호'}가 복사되었습니다.
          <button type="button" onClick={handleCloseLinkModal}>
            확인
          </button>
        </div>
      )}
      {rsvpModal && <RsvpModal setRsvpModal={setRsvpModal} />}
      <ToastContainer />
    </div>
  );
}

export default App;
