import React from 'react';
import { shallow } from 'enzyme';
import ExportButton from './ExportButton';

describe('ExportButton', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ExportButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<ExportButton onClick={onClickMock} />);
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should render the correct text', () => {
    const wrapper = shallow(<ExportButton />);
    expect(wrapper.find('button').text()).toEqual('Export Employee Data');
  });
});