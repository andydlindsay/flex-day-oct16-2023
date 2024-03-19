import { useContext } from "react";
import CountContext from "../contexts/CountContext";

const Child = () => {
  const {count, increment, decrement} = useContext(CountContext);

  return (
    <div>
      <h2>Child Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Child;
