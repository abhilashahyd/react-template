import React from 'react';
import { shallow } from 'enzyme';
import DocumentPreview from './DocumentPreview';

describe('DocumentPreview', () => {
  const document = {
    id: 1,
    name: 'test document',
    previewUrl: 'https://test.com/document.png'
  };
  const onDelete = jest.fn();

  it('renders without crashing', () => {
    shallow(<DocumentPreview document={document} onDelete={onDelete} />);
  });

  it('displays the document preview image', () => {
    const wrapper = shallow(<DocumentPreview document={document} onDelete={onDelete} />);
    expect(wrapper.find('img').prop('src')).toEqual(document.previewUrl);
    expect(wrapper.find('img').prop('alt')).toEqual(document.name);
  });

  it('does not display the delete button by default', () => {
    const wrapper = shallow(<DocumentPreview document={document} onDelete={onDelete} />);
    expect(wrapper.find('.delete-button')).toHaveLength(0);
  });

  it('displays the delete button when hovering over the component', () => {
    const wrapper = shallow(<DocumentPreview document={document} onDelete={onDelete} />);
    wrapper.simulate('mouseEnter');
    expect(wrapper.find('.delete-button')).toHaveLength(1);
  });

  it('calls the onDelete function when the delete button is clicked', () => {
    const wrapper = shallow(<DocumentPreview document={document} onDelete={onDelete} />);
    wrapper.simulate('mouseEnter');
    wrapper.find('.delete-button').simulate('click');
    expect(onDelete).toHaveBeenCalledWith(document.id);
  });
});