import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('renders a button with text "Submit"', () => {
    const wrapper = shallow(<SubmitButton />);
    expect(wrapper.find('button').text()).toEqual('Submit');
  });

  it('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<SubmitButton onClick={onClickMock} />);
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});