import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple React app...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <form action="../../post" method="post" className="form">
          <div>
            <label htmlFor="nome">Nome:</label><br />
            <input type="text" name="nome" id="nome" />
          </div>

          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" />
          </div>

          <div>
            <input type="submit" name="submit" value="LogIn" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
