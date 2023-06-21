import React from 'react';
import { shallow } from 'enzyme';
import SelectCity from './SelectCity';

describe('SelectCity', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectCity />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('initializes with an empty selectedCity state', () => {
    expect(wrapper.state('selectedCity')).toEqual('');
  });

  it('updates the selectedCity state when a city is selected', () => {
    const event = { target: { value: 'New York' } };
    wrapper.find('#city').simulate('change', event);
    expect(wrapper.state('selectedCity')).toEqual('New York');
  });

  it('renders the correct number of city options', () => {
    const options = wrapper.find('option');
    expect(options).toHaveLength(6); // 1 default option + 5 cities
  });

  it('renders the correct city options', () => {
    const options = wrapper.find('option').map(option => option.text());
    expect(options).toEqual(['--Select a city--', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia']);
  });
});