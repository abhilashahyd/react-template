import React from 'react';
import { shallow } from 'enzyme';
import SelectState from './SelectState';

describe('SelectState', () => {
  const states = ['California', 'Texas', 'New York'];
  const selectedState = 'California';
  const onChange = jest.fn();

  it('renders a select element', () => {
    const wrapper = shallow(<SelectState states={states} selectedState={selectedState} onChange={onChange} />);
    expect(wrapper.find('select')).toHaveLength(1);
  });

  it('renders options for each state', () => {
    const wrapper = shallow(<SelectState states={states} selectedState={selectedState} onChange={onChange} />);
    expect(wrapper.find('option')).toHaveLength(states.length);
  });

  it('calls onChange when select value changes', () => {
    const wrapper = shallow(<SelectState states={states} selectedState={selectedState} onChange={onChange} />);
    wrapper.find('select').simulate('change', { target: { value: 'Texas' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('sets the selected state as the value of the select element', () => {
    const wrapper = shallow(<SelectState states={states} selectedState={selectedState} onChange={onChange} />);
    expect(wrapper.find('select').prop('value')).toEqual(selectedState);
  });
});