import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import {render, fireEvent, prettyDOM} from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

describe('tests for the robot head icon', () => {

  test('can toggle the isCheating boolean by clicking on the robot head icon', () => {
    const {getByTestId, container, debug} = render(<App />);

    // debug();

    // console.log(prettyDOM(container));

    const robotHeadIcon = getByTestId('robot-head-icon');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);

    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
