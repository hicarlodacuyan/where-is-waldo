import React, { useEffect, useState } from "react";

function Stopwatch({ gameIsRunning, gameIsOver }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (gameIsRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    if (gameIsOver) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameIsRunning]);

  return (
    <div className="md:text-4xl text-2xl font-bold">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
}

export default Stopwatch;
