import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination component', () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    onPageChangeMock.mockClear();
  });

  it('renders correctly', () => {
    const { getByText, getByDisplayValue } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock} />
    );

    expect(getByText('Prev')).toBeInTheDocument();
    expect(getByText('Next')).toBeInTheDocument();
    expect(getByDisplayValue('1')).toBeInTheDocument();
    expect(getByText('of 10')).toBeInTheDocument();
  });

  it('calls onPageChange when clicking Prev button', () => {
    const { getByText } = render(
      <Pagination currentPage={2} totalPages={10} onPageChange={onPageChangeMock} />
    );

    fireEvent.click(getByText('Prev'));

    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange when clicking Next button', () => {
    const { getByText } = render(
      <Pagination currentPage={9} totalPages={10} onPageChange={onPageChangeMock} />
    );

    fireEvent.click(getByText('Next'));

    expect(onPageChangeMock).toHaveBeenCalledWith(10);
  });

  it('calls onPageChange when input value is valid and onBlur event is triggered', () => {
    const { getByDisplayValue } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock} />
    );

    const input = getByDisplayValue('1');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.blur(input);

    expect(onPageChangeMock).toHaveBeenCalledWith(5);
  });

  it('does not call onPageChange when input value is invalid and onBlur event is triggered', () => {
    const { getByDisplayValue } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock} />
    );

    const input = getByDisplayValue('1');
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.blur(input);

    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});