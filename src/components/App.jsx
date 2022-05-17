import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function updatedTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    console.log(time);
  }

  setInterval(updatedTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updatedTime}>Get Time</button>
    </div>
  );
}

export default App;
