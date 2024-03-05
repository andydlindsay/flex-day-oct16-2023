import './App.css';

import {useState} from 'react';

// import Counter from './components/Counter';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  const toggleShowLifecycle = () => {
    setShowLifecycle(!showLifecycle);
  };

  return (
    <div className="App">
      <h2>Class-Based React</h2>
      <button onClick={toggleShowLifecycle}>Toggle!</button>
      {/* <Counter /> */}
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
