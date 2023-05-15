/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import Account from './Account';
import Calendar from './Calendar';
import DDay from './DDay';
import Information from './Information';
import Location from './Location';

import mainImg from './assets/photo/5.jpg';
import closeIcon from './assets/icons/close (3).png';
import photoList from './photo';
import './style.scss';

function App() {
  const [mode, setMode] = useState('default');

  const handleClickInterview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMode('interview');
  };

  const handleCloseInterview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMode('default');
  };

  return (
    <div className="invitation">
      {mode === 'default' ? (
        <>
          <div className="header">
            <div className="title">KIM JIHWAN & CHOI YUJEONG</div>
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
            <div className="invite">
              <div className="title">Invitation</div>
              <div className="text">
                <p>언제나 곁에 함께 있어 주신</p>
                <p>소중한 분들께,</p>
                <p>저희의 첫 시작을 전합니다.</p>
                <br />
                <p>큰 축복 가득 전해주시는</p>
                <p>그 따뜻한 마음을 배워</p>
                <p>한없이 맑을 앞으로의 날들,</p>
                <p>서로 더 아끼고 사랑하며 살겠습니다.</p>
              </div>
              <div className="name-wrapper">
                <div className="name">
                  <img
                    src="https://mcard.fromtoday.co.kr/mcard/assets/images/icon_flower_chrys_w32.png"
                    alt=""
                  />
                  김호영 · 소혜경의 아들
                  <span>지환</span>
                </div>
                <div className="name">
                  최흥길 · 김경애의 딸<span>유정</span>
                </div>
              </div>
              <div className="interview-button-wrapper">
                <div
                  className="interview-button"
                  onClick={handleClickInterview}
                  aria-hidden="true"
                >
                  신랑&신부의 인터뷰 읽어보기
                </div>
              </div>
            </div>
            <Calendar />
            <DDay />
            <div className="gallery">
              <div className="title">Gallery</div>
              <div className="gallery-grid">
                {photoList.map((photo) => (
                  <img src={photo} alt="" />
                ))}
              </div>
            </div>
            <Information />
            <Location />
            <Account />
            <div className="rsvp">
              <div className="title">참석 의사 전달</div>
              <div className="rsvp-wrapper">
                <div className="description">
                  <p>모든 분들께</p>
                  <p>부족함 없는 예식을 준비하기 위해</p>
                  <p>참석 및 식사 여부를</p>
                  <p>미리 여쭙고자 합니다.</p>
                  <br />
                  <p>부담없이 알려주시면</p>
                  <p>정성껏 준비하겠습니다.</p>
                </div>
                <div className="button">참석 의사 전달하기</div>
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
        </>
      ) : (
        <div className="interview">
          <div className="title">
            <span className="sub">- Interview - </span>
            <span>우리 두 사람의 이야기</span>
          </div>
          <div className="interview-list">
            <div className="interview-item">
              <div className="question">결혼을 앞둔 소감</div>
              <div className="answer">
                너무 설레이고 떨리는 것 같아요. 인생의 큰 전환점이 될 거라고
                생각하구요. 그 모든 변화가 신랑과 함께라서 더 행복하고 앞으로도
                서로 배려하고 사랑하면서 잘 살아보겠습니다!
              </div>
            </div>
            <div className="interview-item">
              <div className="question">신혼여행은?</div>
              <div className="answer">
                총 15박 17일로, 4박 5일 LA, 6박7일 칸쿤, 5박7일 뉴욕으로 갑니다!
                미국 맛집 추천받아요ㅎㅎ!!
              </div>
            </div>
            <div className="interview-item">
              <div className="question">새로운 시작, 신혼집</div>
              <div className="answer">
                용인시 기흥역 근처예요! 언제나 열려 있으니 놀러오세요!!
              </div>
            </div>
            <div className="interview-item">
              <div className="question">마지막으로 전하고 싶은 이야기</div>
              <div className="answer">
                이주원&김나연, 저희 두 사람의 소중한 날을 위해 귀한 걸음 해주실
                분들을 위해 꼼꼼히 준비했습니다. 특별한 하루에 함께 하셔서
                축하의 마음을 전해주세요!
              </div>
            </div>
          </div>
          <div
            className="close-btn"
            onClick={handleCloseInterview}
            aria-hidden="true"
          >
            <img src={closeIcon} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
