const Child = (props) => {
  console.log('inside Child', props);

  return (
    <div>
      <h2>Child component</h2>
      <h2>You are signed in as: {props.currentUser}</h2>
    </div>
  );
};

export default Child;
