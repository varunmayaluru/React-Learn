import React, { useState } from 'react';
import IncrementButton from './IncrementButton';
import DisplayCount from './DisplayCount';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <DisplayCount count={count} />
      <IncrementButton onIncrement={handleIncrement} />
    </div>
  );
}

export default Counter;
