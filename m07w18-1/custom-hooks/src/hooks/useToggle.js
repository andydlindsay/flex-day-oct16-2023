import {useState} from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return [isOn, toggle];
  // return { isOn, toggle };
};

export default useToggle;
