const Button = (props) => {
  console.log(props);

  const clickHandler = () => {
    props.increment();
  };

  return (
    <div>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
};

export default Button;
