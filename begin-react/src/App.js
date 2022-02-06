import React from 'react';
import Hello from './Hello';

/*
1. 꼭 닫혀야 하는 태그
   - 모든 태그는 닫혀야 함 (html에서 허용되는 예외 태그들도 모두 닫혀야 함, e.g. br)
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <div>
    </div>
  );
}
*/

/*
2. Self-Closing 태그
   - 태그와 태그 사이에 아무런 내용이 없는 경우에는 Self-Closing 태그 사용
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input />
      <br />
    </div>
  );
}
*/

/*
3. 꼭 감싸져야 하는 태그
   - 두개 이상의 태그는 무조건 하나의 태그로 감싸져야 함, 아래처럼 여러 태그를 묶지 않고 사용 불가능
function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}
*/

/*
4. 프래그먼트 사용
   - 위에 처럼 여러 태그를 단순히 <div>로 묶을 경우 스타일 관련 복잡한 상황이 발생 가능
   - 그럴 땐 프래그먼트 (<>  </>) 사용
   - 프래그먼트 사용 시 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않음
function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}
*/

/*
5. JSX 안에서 자바스크립트 값 사용하기
    - JSX 내부에서 자바스크립트 변수를 보여줘야 할 때에는 {}로 감싸서 보여주면 됨
function App() {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}
*/

/*
6. JSX에서 태그에 style과 css를 설정하는 방법 (HTML과 다름!!)
    - 인라인 스타일은 객체 형태로 작성, camelCase 네이밍 규칙
    - css의 class 지정도 className으로 camelCase 규칙 따라야 함
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}
*/

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}
export default App;