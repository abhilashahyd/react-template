import React from 'react';
import { shallow } from 'enzyme';
import DocumentList from './DocumentList';

describe('DocumentList', () => {
  const documents = [
    { id: 1, name: 'Document 1' },
    { id: 2, name: 'Document 2' },
    { id: 3, name: 'Document 3' },
  ];

  it('renders without crashing', () => {
    shallow(<DocumentList documents={documents} />);
  });

  it('displays the document list', () => {
    const wrapper = shallow(<DocumentList documents={documents} />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(documents.length);
  });

  it('displays the delete confirmation dialog', () => {
    const wrapper = shallow(<DocumentList documents={documents} />);
    const deleteButton = wrapper.find('button').at(0);
    deleteButton.simulate('click');
    const confirmationDialog = wrapper.find('div').at(1);
    expect(confirmationDialog).toHaveLength(1);
  });

  it('calls the onDelete function when the delete button is clicked', () => {
    const onDelete = jest.fn();
    const wrapper = shallow(<DocumentList documents={documents} onDelete={onDelete} />);
    const deleteButton = wrapper.find('button').at(0);
    deleteButton.simulate('click');
    const yesButton = wrapper.find('button').at(1);
    yesButton.simulate('click');
    expect(onDelete).toHaveBeenCalled();
  });

  it('cancels the delete operation when the no button is clicked', () => {
    const wrapper = shallow(<DocumentList documents={documents} />);
    const deleteButton = wrapper.find('button').at(0);
    deleteButton.simulate('click');
    const noButton = wrapper.find('button').at(2);
    noButton.simulate('click');
    const confirmationDialog = wrapper.find('div').at(1);
    expect(confirmationDialog).toHaveLength(0);
  });
});