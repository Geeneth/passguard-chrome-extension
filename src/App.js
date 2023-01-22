import logo from './logo.svg';
import './App.css';
import PasswordGenerator from './components/password-generator';
import CheckPassword from './components/check-password';

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
      <CheckPassword/>
    </div>
  );
}

export default App;
