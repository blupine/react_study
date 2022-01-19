import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  
  function func(){
    return 100
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color : 'blue'} }>개발 blog</div>
      </div>
      <h4> { posts } </h4>
      <h4> { func() } </h4>
      <img src={logo}></img>
    </div>
  );
}

export default App;
