/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React, { useState } from 'react';

function DDay() {
  const [diffDay, setDiffDay] = useState({});

  const makeDiffDay = () => {
    const masTime = new Date('2023-09-09 14:30:00');
    const todayTime = new Date();

    const diff = masTime - todayTime;

    const tempDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const diffHour = String(
      Math.floor((diff / (1000 * 60 * 60)) % 24),
    ).padStart(2, '0');
    const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
      2,
      '0',
    );
    const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    setDiffDay((curDay) => {
      const newDay = { ...curDay };
      newDay.day = tempDay;
      newDay.hour = diffHour;
      newDay.min = diffMin;
      newDay.sec = diffSec;
      return newDay;
    });
  };

  setInterval(makeDiffDay, 1000);

  return (
    <div className="dday">
      <div className="text">
        김지환 ♥ 최유정의 결혼식까지 <span>{diffDay.day}일</span> 남았습니다.
      </div>
      <div className="count">
        {diffDay.hour} : {diffDay.min} : {diffDay.sec}
      </div>
    </div>
  );
}

export default DDay;
