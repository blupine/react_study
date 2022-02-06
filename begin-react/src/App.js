import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import Hello3 from './Hello3';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
    <Hello name="react" color="red" />

    {/* 여러개의 props 비구조화 할당 */}
    <Hello2 name="react" color="red" />
    
    {/* defaultProps로 기본값 설정 */}
    <Hello3 color="red"/>
    </Wrapper>
  );
}

export default App;