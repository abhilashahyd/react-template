import React from 'react';
import { shallow } from 'enzyme';
import ValidationComponent from './ValidationComponent';

describe('ValidationComponent', () => {
  const fields = [
    { name: 'name', label: 'Name', type: 'text', value: '', isRequired: true },
    { name: 'email', label: 'Email', type: 'email', value: '', isRequired: true },
    { name: 'phone', label: 'Phone', type: 'tel', value: '', isRequired: false },
  ];

  const onSubmit = jest.fn();

  it('renders without crashing', () => {
    shallow(<ValidationComponent fields={fields} onSubmit={onSubmit} />);
  });

  it('displays error message when required field is empty', () => {
    const wrapper = shallow(<ValidationComponent fields={fields} onSubmit={onSubmit} />);
    const nameInput = wrapper.find('#name');
    nameInput.simulate('change', { target: { value: '' } });
    const emailInput = wrapper.find('#email');
    emailInput.simulate('change', { target: { value: '' } });
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    const errorSpan = wrapper.find('span');
    expect(errorSpan.text()).toEqual('Name is required');
  });

  it('calls onSubmit when all required fields are filled', () => {
    const wrapper = shallow(<ValidationComponent fields={fields} onSubmit={onSubmit} />);
    const nameInput = wrapper.find('#name');
    nameInput.simulate('change', { target: { value: 'John' } });
    const emailInput = wrapper.find('#email');
    emailInput.simulate('change', { target: { value: 'john@example.com' } });
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(onSubmit).toHaveBeenCalled();
  });
});