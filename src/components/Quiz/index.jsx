/* eslint-disable indent */
/* eslint-disable react/prop-types, no-unused-vars,
react/no-array-index-key,no-nested-ternary  */

import React, { useState, useEffect } from 'react';

import { quizList } from './data';

import playIcon from '../../assets/icons/play-button.png';
import closeIcon from '../../assets/icons/close.png';
import correctIcon from '../../assets/icons/correct.png';
import wrongIcon from '../../assets/icons/wrong.png';
import mainImg from '../../assets/photo/18.jpg';

export default function Quiz({ setQuizModal }) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({
    name: '',
    phone: '',
    score: 0,
  });
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const handlePageMove = () => {
    setCurrent((cur) => cur + 1);
  };

  const handleCloseQuiz = () => {
    setQuizModal(false);
  };

  const startPage = (
    <div className="quiz-page start">
      <div className="title">유정 🤍 지환 퀴즈</div>
      <div className="desc">
        <div>신랑신부에 대한 퀴즈를 풀어보세요!</div>
        <div>참여자와 고득점자에겐 결혼식 당일 2부에서</div>
        <div>추첨을 통해 상품을 증정합니다!</div>
      </div>
      <img src={mainImg} alt="" className="main-img" />
      <button className="next-button" type="button" onClick={handlePageMove}>
        <img src={playIcon} alt="" />
        테스트 시작하기
      </button>
    </div>
  );

  const infoPage = (
    <div className="quiz-page start">
      <div className="quiz-question">이름과 휴대전화 뒷번호를 알려주세요!</div>
      <div className="desc">
        <div>경품을 추첨하고,</div>
        <div>동명이인을 방지하기 위해 수집합니다</div>
      </div>
      <div className="quiz-content info">
        <input type="text" placeholder="홍길동" />
        <input type="text" placeholder="1234" />
      </div>
      <button className="next-button" type="button" onClick={handlePageMove}>
        다음
      </button>
    </div>
  );

  const resultPage = (
    <div className="quiz-page start">
      <div className="quiz-question">
        이름과 휴대전화 뒷번호를 입력해주세요!
      </div>
      <div className="desc">
        <div>경품 지급 및 동명이인 방지 위해 수집합니다</div>
      </div>
      <div className="quiz-content">
        <input type="text" placeholder="홍길동" />
        <input type="text" placeholder="1234" />
      </div>
      <button className="next-button" type="button" onClick={handlePageMove}>
        다음
      </button>
    </div>
  );

  const loadingPage = (
    <div className="quiz-page">
      {loading ? (
        <div className="loading">결과 분석 중...</div>
      ) : (
        <div className="success">완료</div>
      )}
    </div>
  );

  const [status, setStatus] = useState('default');

  const handleAnswerQuiz = (num, index) => {
    setAnswers((curObj) => {
      const newObj = { ...curObj };
      newObj[num] = index;
      return newObj;
    });
    if (quizList[num].answer === index) {
      setData((curData) => {
        const newData = { ...curData };
        newData.score = curData.score + 10;
        return newData;
      });
    }
    setStatus('result');
  };

  useEffect(() => {
    if (status === 'result') {
      setTimeout(() => {
        setStatus('answered');
      }, 500);
    } else if (status === 'answered') {
      setTimeout(() => {
        setCurrent((cur) => cur + 1);
        setStatus('waiting');
      }, 800);
    } else if (status === 'waiting') {
      setTimeout(() => {
        setStatus('default');
      }, 800);
    }
  }, [status]);

  const quizItem = (num) => {
    const answeredList = Object.keys(num);

    return (
      <div className={`quiz-page ${status}`}>
        <div className="quiz-num">{`Q${num}`}</div>
        <div className="quiz-question">{quizList[num].question}</div>
        <div className="quiz-content">
          {quizList[num].answerList.map((o, index) => (
            <div
              aria-hidden="true"
              onClick={() => handleAnswerQuiz(num, index)}
              className={`answer-item ${
                status === 'result'
                  ? index === quizList[num].answer
                    ? 'correct'
                    : index === answers[num]
                    ? 'wrong-shake'
                    : 'wrong'
                  : 'default'
              }`}
              key={`answer_${index}`}
            >
              {o}
              {status === 'result' ? (
                index === quizList[num].answer ? (
                  <img src={correctIcon} alt="" />
                ) : (
                  <img src={wrongIcon} alt="" />
                )
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="quiz-modal-wrapper">
      <div
        className="close-icon-wrapper"
        aria-hidden="true"
        onClick={handleCloseQuiz}
      >
        <img src={closeIcon} alt="" />
      </div>
      {
        {
          0: startPage,
          1: infoPage,
          2: quizItem(1),
          3: quizItem(2),
          4: quizItem(3),
          5: quizItem(4),
          6: quizItem(5),
          7: quizItem(6),
          8: quizItem(7),
          9: quizItem(8),
          10: quizItem(9),
          11: quizItem(10),
          12: loadingPage,
          13: resultPage,
        }[current]
      }
    </div>
  );
}
