import React from 'react';
import { shallow } from 'enzyme';
import SelectUser from './SelectUser';

describe('SelectUser', () => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
  const onSelectUser = jest.fn();
  const wrapper = shallow(<SelectUser users={users} onSelectUser={onSelectUser} />);

  it('renders a label and select element', () => {
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(1);
  });

  it('renders the correct number of options', () => {
    expect(wrapper.find('option')).toHaveLength(users.length + 1);
  });

  it('calls onSelectUser when an option is selected', () => {
    const value = '2';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(onSelectUser).toHaveBeenCalledWith(value);
  });
});