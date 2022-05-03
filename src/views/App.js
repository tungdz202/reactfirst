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

        <Mycomponent />
      </header>
    </div>
  );
}

export default App;
