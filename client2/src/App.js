import { useEffect } from 'react'
import './App.css';
import socketIO from 'socket.io-client'; 

const wsURL = 'http://localhost:8080'; 

function App() { 
  useEffect(() => {
    socketIO(wsURL); 
  }, [])
  return (
    <div className="App">
      <h2>Rijwan Hossain</h2>
      <button class="btn btn-success">
        Start new Meeting 
      </button>
    </div>
  );
}

export default App;
