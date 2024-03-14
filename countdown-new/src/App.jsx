import React, { useState, useEffect } from "react";
import "./App.css"
function App() {
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            setTimerActive(false);
            alert("Time's up!");
            return 0;
          }
        });
      }, 1000);

    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const startTimer = (duration) => {
    setTime(duration * 60);
    setTimerActive(true);
  };


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };


  const StopTimer = () => {
    setTimerActive(false);
      clearInterval(interval);
  };

  return (

    <div className="container">
      <h1> Countdown Timer</h1>
      <div className="button-box">
      <button onClick={() => startTimer(5)}>5 Mins</button>
      <button onClick={() => startTimer(10)}>10 Mins</button>
      <button onClick={() => startTimer(20)}>20 Mins</button>
    </div>
    {timerActive && (
      <div>
        <h2>Countdown: {formatTime(time)}</h2>
        <button onClick={StopTimer}>Stop</button>
      </div>
    )}
  </div>
  )

}

export default App;