import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';

describe('AddUser component', () => {
  it('should render all input fields and a submit button', () => {
    const { getByLabelText, getByText } = render(<AddUser />);
    expect(getByLabelText('Name:')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByText('Add User')).toBeInTheDocument();
  });

  it('should update state when input fields are changed', () => {
    const { getByLabelText } = render(<AddUser />);
    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('johndoe@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('should call addUserToList function when form is submitted', () => {
    const addUserToList = jest.fn();
    const { getByLabelText, getByText } = render(<AddUser addUserToList={addUserToList} />);
    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const submitButton = getByText('Add User');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(addUserToList).toHaveBeenCalledTimes(1);
    expect(addUserToList).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    });
  });
});