/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React, { useEffect, useRef } from 'react';

import kakaoIcon from '../assets/icons/kakaonavi.png';
import naverIcon from '../assets/icons/navermap.png';
import tmapIcon from '../assets/icons/tmap.png';

function Location() {
  const mapElement = useRef(null);
  const { naver } = window;

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5112, 127.0315);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <div className="map">
      <div className="title">Location</div>
      <div className="location-wrapper">
        <div className="location">엘리에나 호텔 컨벤션홀 (2F)</div>
        <div className="address">
          <span>Address</span>
          서울 강남구 논현로 645
        </div>
        <div className="tel">
          <span>Contact</span>
          02-3443-5670
        </div>
      </div>
      <div ref={mapElement} style={{ minHeight: '400px' }} />
      <div className="app-list">
        <div className="app">
          <img src={naverIcon} alt="" />
          네이버 지도
        </div>
        <div className="app">
          <img src={kakaoIcon} alt="" />
          카카오 내비
        </div>
        <div className="app">
          <img src={tmapIcon} alt="" />
          티맵
        </div>
      </div>
      <div className="location-info">
        <div className="info-item">
          <div className="label">주차 안내</div>
          <div>2시간 주차 가능합니다.</div>
          <div>
            웨딩홀 내 주차공간이 부족할 경우, 인근 다른 주차장으로 안내될 수
            있는 점 양해 부탁드립니다.
          </div>
        </div>
        <div className="info-item">
          <div className="label">지하철</div>
          <div>
            <span className="seven">7호선 학동역</span> 4번 출구 도보 4분
          </div>
          <div>
            <span className="nine">9호선 언주역</span> 2번 출구 도보 6분
          </div>
        </div>
        <div className="info-item">
          <div className="label">버스</div>
          <div>
            논현동고개 (23-119)
            <span>
              <span className="blue">147</span>
              <span className="blue">241</span>
              <span className="blue">463</span>
              <span className="green">3412</span>
              <span className="green">4211</span>
            </span>
          </div>
          <div>
            논현고개 (23-146)
            <span>
              <span className="blue">147</span>
              <span className="blue">463</span>
              <span className="green">4211</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
