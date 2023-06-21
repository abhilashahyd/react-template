import React from 'react';
import { shallow } from 'enzyme';
import SelectDepartment from './SelectDepartment';

describe('SelectDepartment', () => {
  const departments = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
  ];
  const selectedDepartment = 'Department 1';
  const handleDepartmentChange = jest.fn();

  it('renders without crashing', () => {
    shallow(<SelectDepartment departments={departments} selectedDepartment={selectedDepartment} handleDepartmentChange={handleDepartmentChange} />);
  });

  it('renders the correct label', () => {
    const wrapper = shallow(<SelectDepartment departments={departments} selectedDepartment={selectedDepartment} handleDepartmentChange={handleDepartmentChange} />);
    expect(wrapper.find('label').text()).toEqual('Select Department:');
  });

  it('renders the correct number of options', () => {
    const wrapper = shallow(<SelectDepartment departments={departments} selectedDepartment={selectedDepartment} handleDepartmentChange={handleDepartmentChange} />);
    expect(wrapper.find('option')).toHaveLength(departments.length);
  });

  it('calls handleDepartmentChange when select value changes', () => {
    const wrapper = shallow(<SelectDepartment departments={departments} selectedDepartment={selectedDepartment} handleDepartmentChange={handleDepartmentChange} />);
    wrapper.find('select').simulate('change', { target: { value: 'Department 2' } });
    expect(handleDepartmentChange).toHaveBeenCalled();
  });
});