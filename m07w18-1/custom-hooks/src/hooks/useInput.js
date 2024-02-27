import {useState} from 'react';

const useInput = (initialState = '') => {
  const [value, setValue] = useState(initialState);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const empty = () => {
    setValue('');
  };

  return {value, onChange, onBlur: empty};
};

export default useInput;
