import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    shallow(<ProgressBar progress={50} remainingTime="2 minutes" />);
  });

  it('displays the correct progress and remaining time', () => {
    const wrapper = shallow(<ProgressBar progress={75} remainingTime="1 minute" />);
    expect(wrapper.find('.progress-bar__fill').prop('style')).toHaveProperty('width', '75%');
    expect(wrapper.find('.progress-bar__text').text()).toEqual('75% imported, 1 minute remaining');
  });
}); 

// Note: This is just an example of how the unit test file could look like. The actual test cases may vary depending on the requirements and functionality of the component.