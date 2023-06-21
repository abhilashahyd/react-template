import React from 'react';
import { shallow } from 'enzyme';
import SelectDesignation from './SelectDesignation';

describe('SelectDesignation', () => {
  const designations = ['Manager', 'Developer', 'Designer'];
  const selectedDesignation = 'Manager';
  const onDesignationChange = jest.fn();

  it('renders correctly', () => {
    const wrapper = shallow(
      <SelectDesignation
        designations={designations}
        selectedDesignation={selectedDesignation}
        onDesignationChange={onDesignationChange}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct number of options', () => {
    const wrapper = shallow(
      <SelectDesignation
        designations={designations}
        selectedDesignation={selectedDesignation}
        onDesignationChange={onDesignationChange}
      />
    );
    expect(wrapper.find('option')).toHaveLength(designations.length);
  });

  it('calls onDesignationChange when select value changes', () => {
    const wrapper = shallow(
      <SelectDesignation
        designations={designations}
        selectedDesignation={selectedDesignation}
        onDesignationChange={onDesignationChange}
      />
    );
    wrapper.find('select').simulate('change', { target: { value: 'Developer' } });
    expect(onDesignationChange).toHaveBeenCalled();
  });
});