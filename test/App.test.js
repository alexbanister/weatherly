import React from 'react';
import App from '../lib/App';
import { shallow } from 'enzyme';

describe('App functionality', () => {
  const wrapper = shallow(<App />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have default values', () => {
    expect(wrapper.state()).toEqual({
      currentWeather: {
        now: 'Loading...',
        temp: '0',
        high: '0',
        low: '0',
        loc: 'Loading...',
        desc: 'Loading...',
        icon: 'clear',
      },
      currentWeatherClass: 'closed',
      tenDay: [{
        day: 'Loading...',
        icon: 'clear',
        low: '0',
        high: '0',
      }],
      hourly: [{
        hour: '0',
        icon: 'clear',
        temp: '0',
      }],
      location: '',
      sideBarClass: 'full',
    });
  });

  it('Render currentClass and Sidebar', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('Sidebar').length).toEqual(1);
  });
});
