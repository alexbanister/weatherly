import React from 'react';
import TenDay from '../lib/TenDay';
import { shallow, mount } from 'enzyme';

describe('Current Weather functionality', () => {
  const dayData = ['', '', '', '', '', '', '', '', '', ''];
  const wrapper = shallow(<TenDay tenDay={dayData} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render 10 Days', () => {
    expect(wrapper.find('DayCard').length).toEqual(10);
  });
});
