const Display = (props) => {
  console.log(props);

  return (
    <div>
      <h2>Displayed count is {props.count}</h2>
    </div>
  );
};

export default Display;
