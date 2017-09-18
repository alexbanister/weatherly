import React from 'react';
import CurrentWeather from './CurrentWeather';
import Sidebar from './Sidebar';
import Data from './Data';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tenDay: Data.tenDay,
      hourly: Data.hourly,
      currentWeather: Data.currentWeather,
      location: '',
      currentWeatherClass: 'closed',
      sideBarClass: 'full',
    };
  }

  searchLocation(location) {
    const pieces = location.split(',');
    const query = pieces[1].trim().toUpperCase() + '/' + pieces[0].trim();
    this.setState({
      location: query,
      currentWeatherClass: 'open',
      sideBarClass: 'side',
    });
  }

  render() {
    return (
      <div id="everything">
        <CurrentWeather
          css={this.state.currentWeatherClass}
          now={this.state.currentWeather.now}
          temp={this.state.currentWeather.temp}
          high={this.state.currentWeather.high}
          low={this.state.currentWeather.low}
          loc={this.state.currentWeather.loc}
          desc={this.state.currentWeather.desc}
          icon={this.state.currentWeather.icon} />
        <Sidebar
          css={this.state.sideBarClass}
          search={this.searchLocation.bind(this)}
          tenDay={this.state.tenDay}
          hourly={this.state.hourly} />
      </div>
    );
  }
}
