/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/no-array-index-key,no-nested-ternary, indent  */

import React, { useState, useRef, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer } from 'react-toastify';
import scrollbar from 'smooth-scrollbar';
import { isIOS, isAndroid } from 'react-device-detect';

import useScrollFadeIn from './hooks/useScrollFadeIn';
import useBodyScrollLock from './hooks/useBodyScrollLock';
import photoList from './photo';

import Account from './components/Account';
import Calendar from './components/Calendar';
import DDay from './components/DDay';
import Information from './components/Information';
import Location from './components/Location';
import RsvpModal from './components/RsvpModal';
import ImageSlide from './components/ImageSlide';
import GuestBook from './components/GuestBook';

import mainImg from './assets/photo/5.jpg';
import flowerIcon from './assets/icons/chrysanthemum.png';
import linkIcon from './assets/icons/link.png';
import kakaoIcon from './assets/icons/kakao-talk.png';
import purpleImg from './assets/background/purple.png';
import leafImg from './assets/background/leaf.png';

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '김지환 ♥ 최유정의 결혼식에 초대합니다.',
        description: '23.09.09 PM 2:30 · 엘리에나호텔',
        imageUrl: 'https://i.postimg.cc/sgr0RtYW/6.jpg',
        link: {
          mobileWebUrl: process.env.REACT_APP_MAIN_LINK,
          webUrl: process.env.REACT_APP_MAIN_LINK,
        },
      },
      buttons: [
        {
          title: '지금 확인하기',
          link: {
            mobileWebUrl: process.env.REACT_APP_MAIN_LINK,
            webUrl: process.env.REACT_APP_MAIN_LINK,
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

  const { lockScroll, openScroll } = useBodyScrollLock();

  const [loading, setLoading] = useState(true);

  const [copyModal, setCopyModal] = useState('');
  const [rsvpModal, setRsvpModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    const contentDiv = document.querySelector('#smooth-scroll');
    if (contentDiv && !isAndroid && !isIOS) {
      scrollbar.init(contentDiv, {
        damping: 0.02,
      });
    }
  }, []);

  const handleCopyOk = () => {
    setCopyModal('link');
  };

  const handleCloseLinkModal = () => {
    setCopyModal('');
  };

  const handleClickRsvp = () => {
    setRsvpModal(true);
  };

  const handleClickImage = (key) => {
    setImageModal(key);
    lockScroll();
  };

  const handleCloseImageModal = () => {
    setImageModal('');
    openScroll();
  };

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
          <CopyToClipboard
            text={process.env.REACT_APP_MAIN_LINK}
            onCopy={handleCopyOk}
          >
            <img src={linkIcon} alt="" />
          </CopyToClipboard>
          <div onClick={shareKakao} aria-hidden="true">
            <img src={kakaoIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="content" id="smooth-scroll">
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
          </div>
          <div className="img-decoration">our wedding day</div>
        </div>
        <div className="invite" ref={inviteRef}>
          {/* <div className="title">Invitation</div> */}
          <div className="text">
            <img src={purpleImg} alt="" />
            <p>푸른 하늘이 눈부신 9월의 어느날,</p>
            <p>소중한 순간들을 사랑으로 엮어</p>
            <p>저희 결혼합니다.</p>
            <br />
            <p>설레는 시작의 순간에</p>
            <p>고마운 분들을 초대합니다.</p>
            <p>따뜻한 사랑으로 축복해주세요.</p>
          </div>
          <div className="line" />
          <div className="name-wrapper">
            <div className="name">
              <img src={flowerIcon} alt="" />
              <strong>김호영 · 소혜경</strong>의 <div className="sub">아들</div>
              <span>지환</span>
            </div>
            <div className="name">
              <strong>최흥길 · 김경애</strong>의 <div className="sub">딸</div>
              <span>유정</span>
            </div>
          </div>
        </div>

        <Calendar />
        <DDay />
        <div className="gallery">
          <div className="sub-title">GALLERY</div>
          <div className="title">우리의 순간들</div>
          <div className="gallery-grid">
            {Object.keys(photoList).map((photo) => (
              <div
                key={`photo_${photo}`}
                onClick={() => handleClickImage(photo)}
                aria-hidden="true"
              >
                <img src={photoList[photo].src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <Information />
        <Location />
        <Account setCopyModal={setCopyModal} />
        <div className="rsvp">
          <div className="sub-title">RSVP</div>
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
          <CopyToClipboard
            text={process.env.REACT_APP_MAIN_LINK}
            onCopy={handleCopyOk}
          >
            <div className="link-share" aria-hidden="true">
              <img src={linkIcon} alt="" />
              링크주소 복사하기
            </div>
          </CopyToClipboard>
          <div className="kakao-share" aria-hidden="true" onClick={shareKakao}>
            <img src={kakaoIcon} alt="" />
            카카오톡 공유하기
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
      {imageModal && (
        <ImageSlide
          imageModal={imageModal}
          handleCloseImageModal={handleCloseImageModal}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
