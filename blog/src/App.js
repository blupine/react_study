import logo from './logo.svg';
import './App.css';

function App() {

  let posts = {color : 'blue', fontSize : '30px'};
  
  function func(){
    return 100
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ posts }>개발 blog</div>
      </div>
      <h4> { func() } </h4>
      <img src={logo}></img>
    </div>
  );
}

export default App;
