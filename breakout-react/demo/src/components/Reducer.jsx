import {useReducer} from 'react';

const initialState = {
  numClicks: 0,
};

const reducer = (state, action) => {
  console.log('action', action);

  const options = {
    numberOfClicks: () => {
      return {
        ...state,
        numClicks: state.numClicks + 1,
      };
    },
    addBy10: (n) => {
      return {
        ...state,
        numClicks: state.numClicks + n,
      }
    },
  };

  return options[action.type](action.payload);
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = () => {
    dispatch({ type: 'numberOfClicks', payload: 1 });
  };

  const clickHandler = () => {
    dispatch({ type: 'addBy10', payload: 10 });
  };

  return (
    <div>
      <h2>Reducer!!!</h2>
      <button onClick={onClick}>Click me!</button>
      <button onClick={clickHandler}>Increment by 10</button>

      <h2>Count: {state.numClicks}</h2>
    </div>
  );
};

export default Reducer;
