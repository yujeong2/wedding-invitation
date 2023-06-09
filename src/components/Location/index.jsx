/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,operator-linebreak */
import React, { useEffect, useRef } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';

import kakaoIcon from '../../assets/icons/kakaonavi.png';
import naverIcon from '../../assets/icons/navermap.png';
import tmapIcon from '../../assets/icons/tmap.png';
import mapMarkerIcon from '../../assets/icons/map-marker-custom.png';

const URL_ENCODED_HOTEL =
  '%ec%97%98%eb%a6%ac%ec%97%90%eb%82%98%ed%98%b8%ed%85%94';

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

  const handleClickNaverMap = () => {
    if (isIOS) {
      window.location.replace(
        `nmap://search?query=${URL_ENCODED_HOTEL}&appname=${process.env.REACT_APP_MAIN_LINK}`,
      );
    } else if (isAndroid) {
      window.location.replace(
        `intent://search?query=${URL_ENCODED_HOTEL}&appname=${process.env.REACT_APP_MAIN_LINK}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`,
      );
    } else {
      window.open(
        'https://map.naver.com/v5/entry/place/1354448162?c=15,0,0,0,dh',
      );
    }
  };

  const handleClickKakaoMap = () => {
    if (isIOS || isAndroid) {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_KEY);
        }
        kakao.Navi.start({
          name: '엘리에나호텔',
          x: 127.0318,
          y: 37.5112,
          coordType: 'wgs84',
        });
      }
    } else {
      window.open('https://map.kakao.com/?itemId=1197705393');
    }
  };

  const handleClickTMap = () => {
    if (isIOS || isAndroid) {
      window.location.replace('tmap://search?name=엘리에나호텔');
    } else {
      window.open('https://surl.tmobiapi.com/b9e8d01b');
    }
  };

  return (
    <div className="map">
      <div className="sub-title">LOCATION</div>
      <div className="title">오시는 길을 안내합니다</div>
      <div className="map-element" ref={mapElement} />
      <div className="location-wrapper">
        <div className="venue">
          <img src={mapMarkerIcon} alt="" />
          엘리에나호텔 컨벤션홀 (2F)
        </div>
        <div className="venue-info">
          <span>서울 강남구 논현로 645</span>
          <span> 02&#41;&nbsp;3443-5670</span>
        </div>
      </div>
      <div className="location-info">
        <div className="info-item">
          <div className="label">내비게이션</div>
          <div className="app-list">
            <div
              className="app"
              aria-hidden="true"
              onClick={handleClickNaverMap}
            >
              <img src={naverIcon} alt="" />
              네이버 지도
            </div>
            <div
              className="app"
              aria-hidden="true"
              onClick={handleClickKakaoMap}
            >
              <img src={kakaoIcon} alt="" />
              카카오 내비
            </div>
            <div className="app" aria-hidden="true" onClick={handleClickTMap}>
              <img src={tmapIcon} alt="" />
              티맵
            </div>
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
