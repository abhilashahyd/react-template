import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddDesignation from './AddDesignation';

describe('AddDesignation component', () => {
  it('should render the component without errors', () => {
    const { getByLabelText, getByText } = render(<AddDesignation />);
    expect(getByLabelText('Designation Name:')).toBeInTheDocument();
    expect(getByText('Add Designation')).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    const { getByLabelText } = render(<AddDesignation />);
    const input = getByLabelText('Designation Name:');
    fireEvent.change(input, { target: { value: 'Manager' } });
    expect(input.value).toBe('Manager');
  });

  it('should add a new designation when submitting the form', () => {
    const setDesignations = jest.fn();
    const { getByLabelText, getByText } = render(
      <AddDesignation designations={['Developer']} setDesignations={setDesignations} />
    );
    const input = getByLabelText('Designation Name:');
    const button = getByText('Add Designation');
    fireEvent.change(input, { target: { value: 'Manager' } });
    fireEvent.click(button);
    expect(setDesignations).toHaveBeenCalledWith(['Developer', 'Manager']);
    expect(input.value).toBe('');
  });
});