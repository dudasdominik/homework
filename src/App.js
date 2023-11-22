import { useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';


function App() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [isProgressBarRunning, setProgressBarRunning] = useState(false);
  const [username, setUsername] = useState("");

  function startProgressBar() {
    setPopupVisibility(true);
    setProgressBarRunning(true);

    setTimeout(() => {
      setPopupVisibility(false);
    }, 5000);
  }

  return (
    <div className="App">
      <h1>Press the button for PopUp Progress bar</h1>
      <button onClick={startProgressBar}>Click here</button>
      <label>Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <ProgressBar
        isVisible={isPopupVisible}
        setVisibility={setPopupVisibility}
        isRunning={isProgressBarRunning}
        username={username}
      />
    </div>
  );
}

export default App;


