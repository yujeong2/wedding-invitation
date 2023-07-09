/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,
react/no-array-index-key,no-nested-ternary, indent  */

import React, { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer } from 'react-toastify';
// import scrollbar from 'smooth-scrollbar';

import useScrollFadeIn from './hooks/useScrollFadeIn';
import useBodyScrollLock from './hooks/useBodyScrollLock';

import Account from './components/Account';
import Calendar from './components/Calendar';
import DDay from './components/DDay';
import Information from './components/Information';
import Location from './components/Location';
import RsvpModal from './components/RsvpModal';
import Gallery from './components/Gallery';
import ImageSlide from './components/ImageSlide';
import Quiz from './components/Quiz';
import GuestBook from './components/GuestBook';
import WriteModal from './components/GuestBook/WriteModal';
import DeleteModal from './components/GuestBook/DeleteModal';

import mainImg from './assets/photo/main.jpg';
import flowerIcon from './assets/icons/daisy.png';
import linkIcon from './assets/icons/link.png';
import kakaoIcon from './assets/icons/kakao-talk.png';

import purpleImg from './assets/background/purple.png';
import leafImg from './assets/background/leaf.png';
import basketImg from './assets/background/pink.png';

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
  const [writeModal, setWriteModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState('');
  const [quizModal, setQuizModal] = useState(false);

  const [guestbookList, setGuestbookList] = useState([]);

  // useEffect(() => {
  //   const contentDiv = document.querySelector('#smooth-scroll');
  //   if (contentDiv && !isAndroid && !isIOS) {
  //     scrollbar.init(contentDiv, {
  //       damping: 0.02,
  //     });
  //   }
  // }, []);

  const handleCopyOk = () => {
    setCopyModal('link');
  };

  const handleCloseLinkModal = () => {
    setCopyModal('');
  };

  const handleClickImage = (key) => {
    setImageModal(key);
    lockScroll();
  };

  const handleCloseImageModal = () => {
    setImageModal('');
    openScroll();
  };

  const handleClickQuiz = () => {
    setQuizModal(true);
    lockScroll();
  };

  const handleCloseQuiz = () => {
    setQuizModal(false);
    openScroll();
  };

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const handleClickRsvp = () => {
    setRsvpModal(true);
    lockScroll();
  };

  const handleCloseRsvpModal = () => {
    setRsvpModal(false);
    openScroll();
  };

  const handleWriteModal = (flag) => {
    if (flag === 'open') {
      setWriteModal(true);
      lockScroll();
    } else {
      setWriteModal(false);
      openScroll();
    }
  };

  const handleDeleteModal = (index) => {
    if (index !== undefined) {
      setDeleteModal(index);
      lockScroll();
    } else {
      setDeleteModal('');
      openScroll();
    }
  };

  return (
    <div className="invitation">
      {loading && (
        <div className="loading">
          <div className="decoration">Our Wedding Day</div>
          <div className="loading-content">유정 ♥ 지환</div>
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
            <p>지환 그리고 유정,</p>
            <p>한 곳을 바라보며 첫 발을 떼는 날</p>
            <p>곁에서 아껴주셨던 고마운 분들을 모십니다.</p>
            <br />
            <p>서로 소중히 아끼고 처음처럼 사랑하며</p>
            <p>예쁘게 살겠습니다.</p>
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
        {/* <Contact /> */}
        <Calendar />
        <DDay />
        <Gallery handleClickImage={handleClickImage} />
        <div className="quiz">
          <div className="sub-title">join us</div>
          <div className="title">신랑신부 퀴즈 풀기</div>
          <div className="quiz-wrapper">
            <img src={basketImg} alt="" />
            <div className="description">
              <p>신랑신부에 대한 퀴즈를 풀어보세요!</p>
              <p>참여해 주신 분들과</p>
              <p>고득점을 얻은 분들께는</p>
              <p>결혼식 2부 진행 시</p>
              <p>추첨을 통해 상품을 드립니다🎁</p>
              <br />
              <p>신랑신부에 대해 알아가는</p>
              <p>재밌는 시간이 되길 바랍니다😊</p>
            </div>
            <button className="button" type="button" onClick={handleClickQuiz}>
              퀴즈 풀어보기
            </button>
          </div>
        </div>
        <Information />
        <Location />
        <Account setCopyModal={setCopyModal} />
        <div className="rsvp">
          <div className="sub-title">save the date</div>
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

        <GuestBook
          handleWriteModal={handleWriteModal}
          handleDeleteModal={handleDeleteModal}
          guestbookList={guestbookList}
          setGuestbookList={setGuestbookList}
        />
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
      {rsvpModal && <RsvpModal handleCloseRsvpModal={handleCloseRsvpModal} />}
      {imageModal && (
        <ImageSlide
          imageModal={imageModal}
          handleCloseImageModal={handleCloseImageModal}
        />
      )}
      {writeModal && (
        <WriteModal
          handleWriteModal={handleWriteModal}
          setGuestbookList={setGuestbookList}
        />
      )}
      {deleteModal !== '' && (
        <DeleteModal
          deleteModal={deleteModal}
          handleDeleteModal={handleDeleteModal}
          guestbookList={guestbookList}
          setGuestbookList={setGuestbookList}
        />
      )}
      {quizModal && <Quiz handleCloseQuiz={handleCloseQuiz} />}
      <ToastContainer />
    </div>
  );
}

export default App;
