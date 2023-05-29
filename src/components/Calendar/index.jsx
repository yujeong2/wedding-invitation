/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Calendar() {
  const calendarRef = useRef(null);
  const [calendarArray, setCalendarArray] = useState([]);

  useScrollFadeIn(calendarRef);

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
    <div className="calendar" ref={calendarRef}>
      <div className="month">
        <span className="month-subtext">September</span>
        <span className="month-text">9</span>
      </div>
      <div className="calendar-wrapper">
        <div className="dayname">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid">
          {calendarArray.map((week) => (
            <div className="week" key={week}>
              {week.map((day, index) => (
                <div
                  key={`day_${index}`}
                  className={day === 9 ? 'day wedding' : 'day'}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="date-text">23년 9월 9일 토요일 오후 2시 30분</div>
    </div>
  );
}

export default Calendar;
