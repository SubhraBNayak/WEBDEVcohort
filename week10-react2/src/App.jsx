import { useState, useEffect   } from 'react';

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
  
  //we have to hook into the lifecycle event of react component
  /*
    everytime a state variable changes, the components in 'function app()' gets called again 
    that is the precise reason why setInterval was getting called again and again 
    the sudden flashes and crazy behaviour of the timer on screen is nothing but too many timers running at the same time
  */
  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  //mounting, by using useEffect, we can guard out setInterval function from re-rendering by using useEffect
  useEffect(function(){
    setInterval( function () {
      setCount(count + 1);
    }, 1000)
  }, [count])

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
