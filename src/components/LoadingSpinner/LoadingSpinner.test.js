import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    shallow(<LoadingSpinner />);
  });

  it('renders a div with class "loading-spinner"', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.find('div.loading-spinner')).toHaveLength(1);
  });

  it('renders a div with class "spinner"', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.find('div.spinner')).toHaveLength(1);
  });

  it('renders a p tag with text "Loading..."', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.find('p').text()).toEqual('Loading...');
  });
}); 

Note: This is just an example of how a unit test file for a React UI component can be written using Jest. The actual test cases may vary depending on the specific requirements and functionality of the component.