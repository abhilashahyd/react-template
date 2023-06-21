import React from 'react';
import { shallow } from 'enzyme';
import EmployeeForm from './EmployeeForm';
import BasicDetails from './BasicDetails';
import WorkDetails from './WorkDetails';
import SeparationDetails from './SeparationDetails';
import PersonalDetails from './PersonalDetails';
import CommunicationDetails from './CommunicationDetails';

describe('EmployeeForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmployeeForm />);
  });

  it('renders a form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('renders BasicDetails component', () => {
    expect(wrapper.find(BasicDetails)).toHaveLength(1);
  });

  it('renders WorkDetails component', () => {
    expect(wrapper.find(WorkDetails)).toHaveLength(1);
  });

  it('renders SeparationDetails component', () => {
    expect(wrapper.find(SeparationDetails)).toHaveLength(1);
  });

  it('renders PersonalDetails component', () => {
    expect(wrapper.find(PersonalDetails)).toHaveLength(1);
  });

  it('renders CommunicationDetails component', () => {
    expect(wrapper.find(CommunicationDetails)).toHaveLength(1);
  });

  it('updates basicDetails state when BasicDetails component changes', () => {
    const basicDetails = { name: 'John Doe', age: 30 };
    wrapper.find(BasicDetails).simulate('change', basicDetails);
    expect(wrapper.state('basicDetails')).toEqual(basicDetails);
  });

  it('updates workDetails state when WorkDetails component changes', () => {
    const workDetails = { company: 'ABC Inc.', position: 'Developer' };
    wrapper.find(WorkDetails).simulate('change', workDetails);
    expect(wrapper.state('workDetails')).toEqual(workDetails);
  });

  it('updates separationDetails state when SeparationDetails component changes', () => {
    const separationDetails = { reason: 'Resignation', date: '2021-01-01' };
    wrapper.find(SeparationDetails).simulate('change', separationDetails);
    expect(wrapper.state('separationDetails')).toEqual(separationDetails);
  });

  it('updates personalDetails state when PersonalDetails component changes', () => {
    const personalDetails = { gender: 'Male', maritalStatus: 'Single' };
    wrapper.find(PersonalDetails).simulate('change', personalDetails);
    expect(wrapper.state('personalDetails')).toEqual(personalDetails);
  });

  it('updates communicationDetails state when CommunicationDetails component changes', () => {
    const communicationDetails = { email: 'john.doe@example.com', phone: '123-456-7890' };
    wrapper.find(CommunicationDetails).simulate('change', communicationDetails);
    expect(wrapper.state('communicationDetails')).toEqual(communicationDetails);
  });

  it('calls handleSubmit when form is submitted', () => {
    const handleSubmit = jest.fn();
    wrapper.setProps({ handleSubmit });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(handleSubmit).toHaveBeenCalled();
  });
});