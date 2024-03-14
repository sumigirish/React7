import React, { useState, useEffect, useRef } from 'react';
import "./App.css"
function App() {
  const [currentTime, setCurrentTime] = useState(0); // Initial countdown time in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Timer running state
  const intervalRef = useRef(null); // Ref to hold interval ID for cleanup

  const handleStartTimer = (durationInMinutes) => {
    const durationInSeconds = durationInMinutes * 60;
    setCurrentTime(durationInSeconds);
    setIsTimerRunning(true);

    // Clear any previous interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (currentTime > 0) {
        setCurrentTime((prevTime) => prevTime - 1);
      } else {
        setIsTimerRunning(false);
        clearInterval(intervalRef.current);
        alert('Countdown finished!'); // Add an alert for completion (optional)
      }
    }, 1000); // Update timer every second
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const getFormattedTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <h1> Countdown Timer</h1>
      <div className="button-box">
        <button onClick={() => handleStartTimer(5)}>5 Mins</button>
        <button onClick={() => handleStartTimer(10)}>10 Mins</button>
        <button onClick={() => handleStartTimer(20)}>20 Mins</button>
      </div>
      {isTimerRunning && (
        <div>
          <h2>Countdown: {getFormattedTime(currentTime)}</h2>
          <button onClick={handleStopTimer}>Stop</button>
        </div>
      )}
    </div>
  );
}

export default App;