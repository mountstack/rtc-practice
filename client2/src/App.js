import { useEffect } from 'react'
import './App.css';
import { JoinBtn } from './Component/joinBtn';


function App() { 
  // useEffect(() => {
  //   socketIO(wsURL); 
  // }, [])
  return (
    <div className="App">
      <h2>Rijwan Hossain</h2>
      <JoinBtn /> 
    </div>
  );
}

export default App;
