import React from 'react';
import { shallow } from 'enzyme';
import AddCity from './AddCity';

describe('AddCity component', () => {
  let wrapper;
  const cities = ['New York', 'London'];
  const setCities = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AddCity cities={cities} setCities={setCities} />);
  });

  it('renders an input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('renders a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('updates the newCity state when input value changes', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Paris' } });
    expect(wrapper.state('newCity')).toEqual('Paris');
  });

  it('calls setCities and resets newCity state when Add City button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(setCities).toHaveBeenCalledWith([...cities, '']);
    expect(wrapper.state('newCity')).toEqual('');
  });
});