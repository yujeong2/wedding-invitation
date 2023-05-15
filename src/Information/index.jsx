/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import parkingImg from '../assets/photo/parking.jpg';
import noticeImg from '../assets/photo/invitation.jpg';
import diningImg from '../assets/photo/dining.jpg';

const informationData = {
  notice: {
    name: '예식 안내',
    img: noticeImg,
    content:
      '예식이 진행되는 중간 자리로 식사가 서빙되는 동시예식으로 진행됩니다. 예식 진행 및 식사 후 2부가 준비되어 있으니 즐거운 마음으로 함께 해 주시면 감사하겠습니다!',
  },
  parking: {
    name: '주차 안내',
    img: parkingImg,
    content:
      '예식장 내 주차장에 자가 주차가 가능합니다. 주차 공간이 부족할 경우 인근 다른 주차장으로 안내될 수 있는 점 양해 부탁드립니다.',
  },
  dining: {
    name: '식사 안내',
    img: diningImg,
    content:
      '스테이크가 서빙되는 양식 코스로 진행됩니다. 혹시 먼저 식사를 원하시는 경우에는 7층 서브홀로 이동하시면 예식을 영상으로 보시며 미리 식사하실 수 있습니다.',
  },
};

function Information() {
  const [selectedTab, setSelectedTab] = useState('notice');

  const handleClickTab = (e, tab) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedTab(tab);
  };

  return (
    <div className="information">
      <div className="title">Information</div>
      <div className="tabs">
        {Object.keys(informationData).map((tab) => (
          <div
            key={tab}
            className={`tab ${selectedTab === tab ? 'active' : ''}`}
            onClick={(e) => handleClickTab(e, tab)}
            aria-hidden="true"
          >
            {informationData[tab].name}
          </div>
        ))}
      </div>
      <div className="contents">
        <img src={informationData[selectedTab].img} alt="" />
        <div className="information-title">
          <span>{selectedTab.toUpperCase()}</span>
          {informationData[selectedTab].name}
        </div>
        <div className="information-content">
          {informationData[selectedTab].content}
        </div>
      </div>
    </div>
  );
}

export default Information;
