import React from 'react';
import { render, screen } from '@testing-library/react';
import SeparationDetails from './SeparationDetails';

describe('SeparationDetails', () => {
  test('renders Employment End Date label', () => {
    render(<SeparationDetails />);
    const labelElement = screen.getByLabelText('Employment End Date:');
    expect(labelElement).toBeInTheDocument();
  });

  test('renders Reason for Separation label', () => {
    render(<SeparationDetails />);
    const labelElement = screen.getByLabelText('Reason for Separation:');
    expect(labelElement).toBeInTheDocument();
  });

  test('renders Employment End Date input', () => {
    render(<SeparationDetails />);
    const inputElement = screen.getByRole('textbox', { name: 'Employment End Date:' });
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Reason for Separation select', () => {
    render(<SeparationDetails />);
    const selectElement = screen.getByRole('combobox', { name: 'Reason for Separation:' });
    expect(selectElement).toBeInTheDocument();
  });

  test('renders all Reason for Separation options', () => {
    render(<SeparationDetails />);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(5);
  });
});