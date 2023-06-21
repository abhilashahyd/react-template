import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUploadComponent from './FileUploadComponent';

describe('FileUploadComponent', () => {
  it('should render the component', () => {
    const { getByLabelText, getByText } = render(<FileUploadComponent />);
    expect(getByLabelText('Select File:')).toBeInTheDocument();
    expect(getByText('Upload')).toBeInTheDocument();
  });

  it('should update selected file on file change', () => {
    const { getByLabelText } = render(<FileUploadComponent />);
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.change(getByLabelText('Select File:'), { target: { files: [file] } });
    expect(getByLabelText('Select File:').value).toBe('test.png');
  });

  it('should call handleFileUpload on button click', () => {
    const handleFileUpload = jest.fn();
    const { getByText } = render(<FileUploadComponent handleFileUpload={handleFileUpload} />);
    fireEvent.click(getByText('Upload'));
    expect(handleFileUpload).toHaveBeenCalled();
  });
});