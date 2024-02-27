import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {reset, count, increment, addN, decrement} = useCounter(100);

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => addN(5)}>Add 5</button>
      <button onClick={() => addN(10)}>Add 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
