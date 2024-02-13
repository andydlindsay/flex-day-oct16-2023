import React from 'react';
// import Header from './components/Header';
// import Parent from './components/Parent';
// import List from './components/List';
import Actions from './components/Actions';

import './App.css';

const currentUser = 'carol';

const App = () => {
  const parentClickHandler = () => {
    console.log('inside the parent component (App)');
  };

  return (
    <div className="App">
      <h2>Inside the App component</h2>

      {/* <Header color="yellow" />
      <Header color="orange" />
      <Header color="pink" /> */}

      {/* <Parent currentUser={currentUser} /> */}
      
      {/* <List /> */}

      <Actions clickHandler={parentClickHandler}>
        <h2>Does this work???</h2>
        <h2>Does this work???</h2>
        <h2>Does this work???</h2>
      </Actions>

      {/* <Button text="register" /> { props.text }
      <Button>Register</Button> {props.children} */}
    </div>
  );
}

export default App;
