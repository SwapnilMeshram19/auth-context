
import './App.css';
import { Login } from './components/Login';
import { LoginSuccess } from './components/LoginSuccess';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <LoginSuccess/>
    </div>
  );
}

export default App;
