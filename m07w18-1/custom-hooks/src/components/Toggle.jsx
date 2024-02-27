// import {useState} from 'react';
import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [isOn, toggle] = useToggle();
  // const [isOn, setIsOn] = useState(false);

  // const handleClick = () => {
  //   // setIsOn(!isOn);
  //   toggle();
  // };

  return (
    <div>
      <h2>Toggle Component</h2>
      <button onClick={toggle}>Click me!</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
