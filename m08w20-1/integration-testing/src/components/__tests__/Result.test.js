import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display the results from an API call', () => {
  // render our component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the high scores button
  const highScoresButton = getByTestId('high-scores');

  // click on the high scores button
  fireEvent.click(highScoresButton);

  // look in the DOM for one of our fake scores
  return findByText('Bob', { exact: false });
});
