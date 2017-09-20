import React from 'react';
import Sidebar from '../lib/Sidebar';
import { shallow } from 'enzyme';

describe('Current Weather functionality', () => {
  const wrapper = shallow(<Sidebar />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render Header, SevenHour and TenDay', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });
});
