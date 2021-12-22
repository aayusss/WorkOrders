import React, { useState, useEffect } from "react";

const Timer = ({start,timerId,setTimerId,timeLimit }) => {
  const [counter, setCounter] = useState(timeLimit);
  

  useEffect(() => {
    if (start) {
      const intervalId= setInterval(() => setCounter(prev=>prev-=1), 1000);
     setTimerId(intervalId);
    }else{
        clearInterval(timerId)
    }
  }, [start]);

  return (
  <div>
      <h1>{counter}s</h1>
  </div>
  )
};

export default Timer;
