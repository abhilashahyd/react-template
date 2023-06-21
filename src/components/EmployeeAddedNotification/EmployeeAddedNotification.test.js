import React from 'react';
import { shallow } from 'enzyme';
import EmployeeAddedNotification from './EmployeeAddedNotification';

describe('EmployeeAddedNotification', () => {
  it('renders without crashing', () => {
    shallow(<EmployeeAddedNotification employeeName="John Doe" />);
  });

  it('displays the correct employee name', () => {
    const wrapper = shallow(<EmployeeAddedNotification employeeName="Jane Smith" />);
    expect(wrapper.find('p').text()).toEqual('Jane Smith has been successfully added to the system.');
  });
}); 

// Note: This is just an example of how the unit test file could look like. The actual test cases may vary depending on the specific requirements and functionality of the component.