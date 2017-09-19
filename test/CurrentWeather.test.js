import React from 'react';
import CurrentWeather from '../lib/CurrentWeather';
import Sidebar from '../lib/Sidebar';
import Location from '../lib/Location';
import { shallow, mount } from 'enzyme';

describe('Current Weather functionality', () => {
  const mockData = {
    currentWeatherClass: 'closed',
    now: 'Loading...',
    temp: '0',
    high: '0',
    low: '0',
    loc: 'Loading...',
    desc: 'Loading...',
    icon: 'clear',
  };
  const wrapper = shallow(<CurrentWeather
    css={mockData.currentWeatherClass}
    now={mockData.now}
    temp={mockData.temp}
    high={mockData.high}
    low={mockData.low}
    loc={mockData.loc}
    desc={mockData.desc}
    icon={mockData.icon} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a forcast', () => {
    const time = wrapper.find('h6');
    const temp = wrapper.find('h2');
    const loc = wrapper.find('h3');
    const desc = wrapper.find('.current-icon').find('h4');

    expect(time.text()).toEqual(mockData.now);
    expect(temp.text()).toEqual(mockData.temp + '°');
    expect(loc.text()).toEqual(mockData.loc);
    expect(desc.text()).toEqual(mockData.desc);
  });
});
