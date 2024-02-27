// 1. should have the ability to store an array in state
// 2. be able to add elements to the array
// 3. be able to remove elements from the array
// 4. be able to empty the array

import {useState} from 'react';

const useList = () => {
  const [list, setList] = useState([]);

  const addElement = (element) => {
    // const copy = [...list, element];
    setList([...list, element]);
  };

  const removeElement = (element) => {
    const copy = list.filter((el) => { return el !== element; });
    setList(copy);
  };

  const emptyArray = () => {
    setList([]);
  };

  return {list, addElement, removeElement, emptyArray};
};

export default useList;
