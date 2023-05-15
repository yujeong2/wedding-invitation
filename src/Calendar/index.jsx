/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

function Calendar() {
  const [calendarArray, setCalendarArray] = useState([]);

  const makeCalendarGrid = () => {
    const temp = [['', '', '', '', '']];
    for (let i = 1; i < 31; i += 1) {
      const a = Math.floor(i / 7);
      const b = i % 7;
      const index = b < 3 ? a : a + 1;

      if (temp[index]) {
        temp[index].push(i);
      } else {
        temp.push([i]);
      }
    }
    return temp;
  };

  useEffect(() => {
    setCalendarArray(makeCalendarGrid());
  }, []);

  return (
    <div className="calendar">
      <div className="title">Wedding Day</div>
      <div className="date">23년 9월 9일 토요일 오후 2시 30분</div>
      <div className="location">엘리에나호텔 컨벤션홀(2F)</div>
      <div className="calendar-wrapper">
        <div className="dayname">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid">
          {calendarArray.map((week) => (
            <div className="week">
              {week.map((day) => (
                <div className={day === 9 ? 'day wedding' : 'day'}>{day}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
