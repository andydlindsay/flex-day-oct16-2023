import Child from "./Child";

const Parent = (props) => {
  console.log('inside Parent', props);

  return (
    <div>
      <h2>Parent component</h2>
      <Child currentUser={props.currentUser}/>
    </div>
  );
};

export default Parent;
