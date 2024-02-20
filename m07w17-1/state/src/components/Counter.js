import Display from './Display';
import Button from './Button';

const Counter = (props) => {
  return (
    <div>
      <h2>Counter component</h2>

      <Display count={props.count} />
      {/* <Button setCount={setCount} count={count} /> */}
      <Button increment={props.increment} />
    </div>
  );
};

export default Counter;
