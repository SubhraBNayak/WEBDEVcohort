import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  
  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  function IncreaseCount(){
    setCount(count + 1);
  }

  function DecreaseCount(){
    setCount(count - 1);
  }

  function ResetCount(){
    setCount(0);
  }

  return(
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={IncreaseCount}>Increase count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
      <button onClick={ResetCount}>Reset Count</button>
    </div>
  )
}

export default App
