import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('renders without crashing', () => {
    shallow(<SearchResults results={[]} />);
  });

  it('renders the correct number of results', () => {
    const results = [
      { id: 1, name: 'John Doe', designation: 'Developer', email: 'john.doe@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Doe', designation: 'Designer', email: 'jane.doe@example.com', phone: '987-654-3210' },
    ];
    const wrapper = shallow(<SearchResults results={results} />);
    expect(wrapper.find('div').children()).toHaveLength(2);
  });

  it('renders the correct result information', () => {
    const results = [
      { id: 1, name: 'John Doe', designation: 'Developer', email: 'john.doe@example.com', phone: '123-456-7890' },
    ];
    const wrapper = shallow(<SearchResults results={results} />);
    expect(wrapper.find('h3').text()).toEqual('John Doe');
    expect(wrapper.find('p').at(0).text()).toEqual('ID: 1');
    expect(wrapper.find('p').at(1).text()).toEqual('Designation: Developer');
    expect(wrapper.find('p').at(2).text()).toEqual('Email: john.doe@example.com');
    expect(wrapper.find('p').at(3).text()).toEqual('Phone Number: 123-456-7890');
  });
});