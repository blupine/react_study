
/* exlint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // destructuring
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // state : 변수 대신 쓰는 데이터 저장 공간
  // 그냥 변수는 변경되어도 새로고침이 되어야 재렌더링이 됨
  // state는 변경되면 HTML이 자동으로 재렌더링 됨

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="list">
        <h3> {글제목[0]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
