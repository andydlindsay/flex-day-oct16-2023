import {useState} from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {   
    setCount(count - 1);
  };

  const addN = (n) => {
    setCount(count + n);
  };

  const reset = () => {
    setCount(initialCount);
  };

  // return [count, increment, decrement, addN, reset];
  return {count, increment, decrement, addN, reset};
};

export default useCounter;
