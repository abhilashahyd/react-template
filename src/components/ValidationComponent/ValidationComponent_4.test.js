import React from 'react';
import { shallow } from 'enzyme';
import ValidationComponent from './ValidationComponent';

describe('ValidationComponent', () => {
  let wrapper;
  const employeeData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  };
  const onImport = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ValidationComponent employeeData={employeeData} onImport={onImport} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays errors when there are errors', () => {
    wrapper.setState({ errors: ['Error 1', 'Error 2'] });
    expect(wrapper.find('h3').at(0).text()).toEqual('Errors:');
    expect(wrapper.find('li').at(0).text()).toEqual('Error 1');
    expect(wrapper.find('li').at(1).text()).toEqual('Error 2');
  });

  it('displays warnings when there are warnings', () => {
    wrapper.setState({ warnings: ['Warning 1', 'Warning 2'] });
    expect(wrapper.find('h3').at(1).text()).toEqual('Warnings:');
    expect(wrapper.find('li').at(0).text()).toEqual('Warning 1');
    expect(wrapper.find('li').at(1).text()).toEqual('Warning 2');
  });

  it('calls onImport when there are no errors', () => {
    wrapper.setState({ errors: [] });
    wrapper.find('button').at(1).simulate('click');
    expect(onImport).toHaveBeenCalledWith(employeeData);
  });

  it('does not call onImport when there are errors', () => {
    wrapper.setState({ errors: ['Error 1'] });
    wrapper.find('button').at(1).simulate('click');
    expect(onImport).not.toHaveBeenCalled();
  });

  it('calls validateData when the validate button is clicked', () => {
    const validateData = jest.spyOn(wrapper.instance(), 'validateData');
    wrapper.find('button').at(0).simulate('click');
    expect(validateData).toHaveBeenCalled();
  });
});