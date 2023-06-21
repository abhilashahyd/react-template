import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonalDetails from './PersonalDetails';

describe('PersonalDetails component', () => {
  test('renders all input fields', () => {
    render(<PersonalDetails />);
    const addressInput = screen.getByLabelText('Address:');
    const contactNumberInput = screen.getByLabelText('Contact Number:');
    const emergencyContactInput = screen.getByLabelText('Emergency Contact:');
    expect(addressInput).toBeInTheDocument();
    expect(contactNumberInput).toBeInTheDocument();
    expect(emergencyContactInput).toBeInTheDocument();
  });
});