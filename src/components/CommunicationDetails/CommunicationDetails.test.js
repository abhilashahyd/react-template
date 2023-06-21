import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommunicationDetails from './CommunicationDetails';

describe('CommunicationDetails', () => {
  it('should update email state when email input is changed', () => {
    const { getByLabelText } = render(<CommunicationDetails />);
    const emailInput = getByLabelText('Email Address:');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');
  });

  it('should update preferredMode state when select input is changed', () => {
    const { getByLabelText } = render(<CommunicationDetails />);
    const selectInput = getByLabelText('Preferred Communication Mode:');
    fireEvent.change(selectInput, { target: { value: 'phone' } });
    expect(selectInput.value).toBe('phone');
  });
});