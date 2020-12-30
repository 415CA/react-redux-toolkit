import React from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/Counter';

const CustomHook = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <div>CustomHook</div>
      <p>{count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default CustomHook;
