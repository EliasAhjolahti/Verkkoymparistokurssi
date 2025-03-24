import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(); 

  function increase() {
    count = count + 1; 
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
