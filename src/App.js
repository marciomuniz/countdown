import logo from './logo.svg';
import './App.css';

import CountDown from './countdown';

function App() {
  return (

    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo"/>
        <CountDown seconds={60} />
     
    </div>
  );
}

export default App;
