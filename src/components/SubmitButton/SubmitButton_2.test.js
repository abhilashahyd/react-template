import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('renders without crashing', () => {
    shallow(<SubmitButton />);
  });

  it('renders a button', () => {
    const wrapper = shallow(<SubmitButton />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('calls handleSubmit when button is clicked', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<SubmitButton handleSubmit={handleSubmit} />);
    wrapper.find('button').simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('disables the button when isFormValid is false', () => {
    const wrapper = shallow(<SubmitButton isFormValid={false} />);
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });

  it('enables the button when isFormValid is true', () => {
    const wrapper = shallow(<SubmitButton isFormValid={true} />);
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });
});