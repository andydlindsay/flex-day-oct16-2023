import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const List = () => {
  const {list, addElement, removeElement, emptyArray} = useList();
  const newElementInput = useInput('');

  const clickHandler = () => {
    addElement(newElementInput.value);
  };

  const mappedList = list.map((el, index) => {
    return <p key={index}>{el} <span onClick={() => removeElement(el)}>x</span></p>;
  });

  return (
    <div>
      <h2>List Below!!!</h2>
      <button onClick={emptyArray}>Empty Array</button>

      <div>
        <label>New element:</label>
        <input 
          value={newElementInput.value}
          onChange={newElementInput.onChange}
        />
        <button onClick={clickHandler}>Add!</button>
      </div>

      { list.length > 0 && mappedList }
      { list.length === 0 && <h2>please add to the list</h2> }
    </div>
  );
};

export default List;
