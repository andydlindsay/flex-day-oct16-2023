const Actions = (props) => {
  console.log(props);

  const clickHandler = () => {
    console.log('click handler #2');
  };

  const h2MouseOverHandler = () => {
    console.log('mouse is over the h2');
  };

  return (
    <div>
      <h2 onMouseOver={h2MouseOverHandler}>Actions component</h2>
      <button onClick={() => { console.log('click handler #1') }}>Click me!</button>
      <button onClick={props.clickHandler}>Click me #2!</button>

      { props.children }
    </div>
  );
};

export default Actions;
