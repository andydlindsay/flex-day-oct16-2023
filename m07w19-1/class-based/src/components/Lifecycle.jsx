import {Component} from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      interval: null,
    };
  }

  // runs only once, when component is added to the DOM, document.ready
  // setup intervals/timers, fetch data from an API, add DOM event listeners
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log('the component has mounted');

    const intervalId = setInterval(() => {
      console.log('interval is running');
    }, 2000);

    this.setState({ interval: intervalId });
  }

  // runs every time the component updates
  // if you're listening for a particular value to change
  // useEffect(() => {}, [props]);
  componentDidUpdate(prevProps, prevState) {
    console.log('the component has updated');
  }

  // runs one time, right before component is removed from the DOM
  // clean up any messes we've made
  // useEffect that returns a cleanup function
  componentWillUnmount() {
    console.log('the component is about to be removed from the DOM');

    // clear the interval
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <input 
          value={this.state.searchTerm}
          onChange={(event) => this.setState({ searchTerm: event.target.value })}
        />
      </div>
    );
  }
}

export default Lifecycle;
