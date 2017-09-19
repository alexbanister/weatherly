import React from 'react';
import CurrentWeather from '../lib/CurrentWeather';
import Sidebar from '../lib/Sidebar';
import Location from '../lib/Location';
import { shallow, mount } from 'enzyme';

describe('Current Weather functionality', () => {
  const currentWeather = shallow(<CurrentWeather
    css={this.state.currentWeatherClass}
    now={this.state.currentWeather.now}
    temp={this.state.currentWeather.temp_c}
    high={this.state.currentWeather.high.celsius}
    low={this.state.currentWeather.low_c}
    loc={this.state.currentWeather.loc}
    desc={this.state.currentWeather.desc}
    icon={this.state.currentWeather.icon} />);
  it('should get a forcast', () => {

  });

  it('should return an error if fetch fails', () => {

  });

  it('should validate a query', () => {

  });
});
