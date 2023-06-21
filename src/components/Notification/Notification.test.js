import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification component', () => {
  it('renders without crashing', () => {
    shallow(<Notification />);
  });

  it('renders success message when success prop is true', () => {
    const wrapper = shallow(<Notification success={true} />);
    expect(wrapper.find('.notification').hasClass('success')).toEqual(true);
    expect(wrapper.text()).toContain('Import successful!');
  });

  it('renders failure message when success prop is false', () => {
    const wrapper = shallow(<Notification success={false} />);
    expect(wrapper.find('.notification').hasClass('failure')).toEqual(true);
    expect(wrapper.text()).toContain('Import failed!');
  });

  it('renders message prop when provided', () => {
    const message = 'This is a test message';
    const wrapper = shallow(<Notification message={message} />);
    expect(wrapper.text()).toContain(message);
  });
});