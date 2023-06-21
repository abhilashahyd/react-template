import React from 'react';
import { shallow } from 'enzyme';
import EmployeeAdditionForm from './EmployeeAdditionForm';

describe('EmployeeAdditionForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const nameInput = wrapper.find('input').at(0);
    nameInput.simulate('change', { target: { value: 'John Doe' } });
    expect(wrapper.state('name')).toEqual('John Doe');
  });

  it('should update designation state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const designationInput = wrapper.find('input').at(1);
    designationInput.simulate('change', { target: { value: 'Manager' } });
    expect(wrapper.state('designation')).toEqual('Manager');
  });

  it('should update department state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const departmentInput = wrapper.find('input').at(2);
    departmentInput.simulate('change', { target: { value: 'Sales' } });
    expect(wrapper.state('department')).toEqual('Sales');
  });

  it('should update users state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const usersInput = wrapper.find('input').at(3);
    usersInput.simulate('change', { target: { value: 'johndoe@example.com' } });
    expect(wrapper.state('users')).toEqual('johndoe@example.com');
  });

  it('should update states state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const statesInput = wrapper.find('input').at(4);
    statesInput.simulate('change', { target: { value: 'California' } });
    expect(wrapper.state('states')).toEqual('California');
  });

  it('should update cities state on input change', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const citiesInput = wrapper.find('input').at(5);
    citiesInput.simulate('change', { target: { value: 'San Francisco' } });
    expect(wrapper.state('cities')).toEqual('San Francisco');
  });

  it('should update documents state on file upload', () => {
    const wrapper = shallow(<EmployeeAdditionForm />);
    const fileUpload = wrapper.find('FileUpload');
    fileUpload.simulate('change', ['document1.pdf', 'document2.pdf']);
    expect(wrapper.state('documents')).toEqual(['document1.pdf', 'document2.pdf']);
  });

  it('should call handleSubmit on form submission', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<EmployeeAdditionForm handleSubmit={handleSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(handleSubmit).toHaveBeenCalled();
  });
});