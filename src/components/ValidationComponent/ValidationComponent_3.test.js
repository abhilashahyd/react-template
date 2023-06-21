import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ValidationComponent from './ValidationComponent';

describe('ValidationComponent', () => {
  it('renders all input fields', () => {
    const { getByLabelText } = render(<ValidationComponent />);
    expect(getByLabelText('Designation:')).toBeInTheDocument();
    expect(getByLabelText('Department:')).toBeInTheDocument();
    expect(getByLabelText('Users:')).toBeInTheDocument();
    expect(getByLabelText('States:')).toBeInTheDocument();
    expect(getByLabelText('Cities:')).toBeInTheDocument();
  });

  it('displays error message when form is submitted with empty fields', () => {
    const { getByText, getByLabelText } = render(<ValidationComponent />);
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(getByText('Please select all options')).toBeInTheDocument();
  });

  it('submits form when all fields are selected', () => {
    const { getByText, getByLabelText } = render(<ValidationComponent />);
    const designationInput = getByLabelText('Designation:');
    const departmentInput = getByLabelText('Department:');
    const usersSelect = getByLabelText('Users:');
    const statesSelect = getByLabelText('States:');
    const citiesSelect = getByLabelText('Cities:');
    const submitButton = getByText('Submit');

    fireEvent.change(designationInput, { target: { value: 'Manager' } });
    fireEvent.change(departmentInput, { target: { value: 'Sales' } });
    fireEvent.change(usersSelect, { target: { value: ['user1', 'user2'] } });
    fireEvent.change(statesSelect, { target: { value: ['state1', 'state2'] } });
    fireEvent.change(citiesSelect, { target: { value: ['city1', 'city2'] } });
    fireEvent.click(submitButton);

    expect(getByText('Please select all options')).not.toBeInTheDocument();
    // add more assertions for form submission
  });
});