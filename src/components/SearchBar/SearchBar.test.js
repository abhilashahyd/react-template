import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    shallow(<SearchBar />);
  });

  it('calls onSearch prop with search term when search button is clicked', () => {
    const onSearchMock = jest.fn();
    const wrapper = shallow(<SearchBar onSearch={onSearchMock} />);
    const searchTerm = 'test';
    wrapper.find('input').simulate('change', { target: { value: searchTerm } });
    wrapper.find('button').simulate('click');
    expect(onSearchMock).toHaveBeenCalledWith(searchTerm);
  });

  it('updates search term state when input value changes', () => {
    const wrapper = shallow(<SearchBar />);
    const searchTerm = 'test';
    wrapper.find('input').simulate('change', { target: { value: searchTerm } });
    expect(wrapper.find('input').prop('value')).toEqual(searchTerm);
  });
});