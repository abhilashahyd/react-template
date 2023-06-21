import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkDetails from './WorkDetails';

describe('WorkDetails component', () => {
  test('renders all input fields', () => {
    render(<WorkDetails />);
    const designationInput = screen.getByLabelText('Designation:');
    const departmentInput = screen.getByLabelText('Department:');
    const employmentStartDateInput = screen.getByLabelText('Employment Start Date:');
    expect(designationInput).toBeInTheDocument();
    expect(departmentInput).toBeInTheDocument();
    expect(employmentStartDateInput).toBeInTheDocument();
  });
});