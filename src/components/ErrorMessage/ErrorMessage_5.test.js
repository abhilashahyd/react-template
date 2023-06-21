import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders without crashing', () => {
    shallow(<ErrorMessage message="Test error message" />);
  });

  it('displays the error message', () => {
    const wrapper = shallow(<ErrorMessage message="Test error message" />);
    expect(wrapper.find('p').text()).toEqual('Test error message');
  });

  it('has the correct class name', () => {
    const wrapper = shallow(<ErrorMessage message="Test error message" />);
    expect(wrapper.find('.error-message')).toHaveLength(1);
  });
}); 

//Note: This is just an example of how the unit test file could look like. The actual test cases may vary depending on the requirements and functionality of the component.