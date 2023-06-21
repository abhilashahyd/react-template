import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicDetails from './BasicDetails';

describe('BasicDetails component', () => {
  test('renders all input fields', () => {
    render(<BasicDetails />);
    const employeeNameInput = screen.getByLabelText('Employee Name:');
    const employeeIDInput = screen.getByLabelText('Employee ID:');
    const dateOfBirthInput = screen.getByLabelText('Date of Birth:');
    const genderSelect = screen.getByLabelText('Gender:');
    expect(employeeNameInput).toBeInTheDocument();
    expect(employeeIDInput).toBeInTheDocument();
    expect(dateOfBirthInput).toBeInTheDocument();
    expect(genderSelect).toBeInTheDocument();
  });
});