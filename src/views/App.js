import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponents';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello ae
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Mycomponent />
      </header>
    </div>
  );
}

export default App;
