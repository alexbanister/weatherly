import React from 'react';
import SevenHour from '../lib/SevenHour';
import { shallow } from 'enzyme';

describe('Current Weather functionality', () => {
  const hourData = ['', '', '', '', '', '', ''];
  const wrapper = shallow(<SevenHour hourly={hourData} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render 7 hours', () => {
    expect(wrapper.find('HourlyCard').length).toEqual(7);
  });
});
