import React, { useState } from 'react'
import Timer from './Timer';
import "./App.css"

const App = () => {
  const [start, setStart] = useState(false);
  const [timerId,setTimerId]=useState(0)
  const timeLimit=60;

  return (
    <div className='container'>
      <div>
      <div style={{marginLeft:"3rem" ,color:"darkblue"}}>
      <Timer timeLimit={timeLimit} timerId={timerId} setTimerId={setTimerId} start={start}/>
      </div>
      <div>
      <button onClick={()=>setStart(true)} >start</button>
      <button onClick={()=>setStart(false)}>stop</button>
      </div>
      </div>
    </div>
  )
}

export default App
