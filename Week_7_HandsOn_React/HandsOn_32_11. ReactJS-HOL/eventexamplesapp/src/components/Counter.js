import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(c => c + 1);
    sayHello();
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to say hello with a static message
  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // Function to say welcome with an argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Function to handle synthetic event
  const handlePress = (e) => {
    alert('I was clicked');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <button onMouseDown={handlePress}>Click on me</button>
    </div>
  );
}

export default Counter;