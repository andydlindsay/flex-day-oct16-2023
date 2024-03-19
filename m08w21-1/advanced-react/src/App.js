import './App.css';
import {useState, useRef} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // avoid reading stale state
  const countRef = useRef(); // { current: undefined }
  countRef.current = count;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const showAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${countRef.current}`);
    }, 2000);
  };

  // setting focus on a DOM element
  const usernameRef = useRef();

  const setFocus = () => {
    usernameRef.current.focus();
  };

  return (
    <div className="App">
      <h2>Advanced React</h2>

      <label>Username</label>
      <input ref={usernameRef} />
      <button onClick={setFocus}>Focus!!!</button>

    </div>
  );
};

export default App;
