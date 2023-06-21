import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImportButton from './ImportButton';

describe('ImportButton', () => {
  it('should render a Button component', () => {
    const wrapper = shallow(<ImportButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should render a CloudUploadIcon component', () => {
    const wrapper = shallow(<ImportButton />);
    expect(wrapper.find(CloudUploadIcon)).toHaveLength(1);
  });

  it('should call handleImport function when button is clicked', () => {
    const handleImportMock = jest.fn();
    const wrapper = shallow(<ImportButton handleImport={handleImportMock} />);
    wrapper.find(Button).simulate('click');
    expect(handleImportMock).toHaveBeenCalled();
  });
});