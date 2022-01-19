
/* exlint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likeCnt, likeCntWriter] = useState(0);

  function titleChange(){
    var newArr = [...글제목]; // deep copy
    newArr[0] = '여자 코트 추천';
    글제목변경(newArr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ titleChange }>button</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{ likeCntWriter(likeCnt+1) } }>👍🏻</span> {likeCnt}</h3>
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
