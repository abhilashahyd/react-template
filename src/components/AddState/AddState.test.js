import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddState from './AddState';

describe('AddState component', () => {
  it('should render the component', () => {
    const { getByLabelText, getByText } = render(<AddState />);
    const inputElement = getByLabelText('State Name:');
    const buttonElement = getByText('Add State');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should update the state input value when typing', () => {
    const { getByLabelText } = render(<AddState />);
    const inputElement = getByLabelText('State Name:');
    fireEvent.change(inputElement, { target: { value: 'California' } });
    expect(inputElement.value).toBe('California');
  });

  it('should add a new state to the list when submitting the form', () => {
    const states = ['New York', 'Texas'];
    const setStates = jest.fn();
    const { getByLabelText, getByText } = render(
      <AddState states={states} setStates={setStates} />
    );
    const inputElement = getByLabelText('State Name:');
    const buttonElement = getByText('Add State');
    fireEvent.change(inputElement, { target: { value: 'California' } });
    fireEvent.click(buttonElement);
    expect(setStates).toHaveBeenCalledWith([...states, 'California']);
    expect(inputElement.value).toBe('');
  });
});