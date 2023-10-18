import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* Bir bileşeni kullanma <Bileşenİsmi />  */}
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Merhaba ilk react kodu!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Öğren
        </a>
      </header>
    </div>
  );
}

export default App;
