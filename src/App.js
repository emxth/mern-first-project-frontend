import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  //Added by arshvinth
  //second line added

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my React Project</h1>
        <button className='users-button' onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
