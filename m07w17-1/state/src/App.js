import './App.css';

import {useState} from 'react';

// import Button from './components/Button';
import Counter from './components/Counter';
// import Form from './components/Form';
import Header from './components/Header';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <h2>React State</h2>

      {/* <Button>This is children</Button> */}

      <Header count={count} />
      <Counter count={count} increment={increment} />
      {/* <Form /> */}
    </div>
  );
};

export default App;
