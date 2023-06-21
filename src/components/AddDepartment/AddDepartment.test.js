import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddDepartment from './AddDepartment';

describe('AddDepartment', () => {
  it('should render the component', () => {
    const { getByLabelText, getByText } = render(<AddDepartment />);
    expect(getByLabelText('Department Name:')).toBeInTheDocument();
    expect(getByText('Add Department')).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    const { getByLabelText } = render(<AddDepartment />);
    const input = getByLabelText('Department Name:');
    fireEvent.change(input, { target: { value: 'Marketing' } });
    expect(input.value).toBe('Marketing');
  });

  it('should add a new department when submitting the form', () => {
    const departments = ['Sales', 'Finance'];
    const setDepartments = jest.fn();
    const { getByLabelText, getByText } = render(
      <AddDepartment departments={departments} setDepartments={setDepartments} />
    );
    const input = getByLabelText('Department Name:');
    const button = getByText('Add Department');
    fireEvent.change(input, { target: { value: 'Marketing' } });
    fireEvent.click(button);
    expect(setDepartments).toHaveBeenCalledWith([...departments, 'Marketing']);
    expect(input.value).toBe('');
  });
});