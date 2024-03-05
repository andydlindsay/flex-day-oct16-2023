import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      anotherVar: 'hello',
      photos: [],
      internalValue: props.outerValue + 1,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1, photos: [] });
  }

  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h2>Count: {this.state.counter}</h2>

        <button onClick={() => this.handleClick()}>Increment!</button>
      </div>
    );
  }
}

export default Counter;
