import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // destructuring
  let [글제목, 글제목변경] = useState('남자 코트 추천');// state : 변수 대신 쓰는 데이터 저장 공간
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="list">
        <h3> {글제목} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
