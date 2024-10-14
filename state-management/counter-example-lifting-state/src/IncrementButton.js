import React from 'react';

function IncrementButton({ onIncrement }) {
  return (
    <button onClick={onIncrement}>Increment</button>
  );
}

export default IncrementButton;
