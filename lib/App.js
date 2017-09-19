import React from 'react';
import CurrentWeather from './CurrentWeather';
import Sidebar from './Sidebar';
import Data from './Data';
import Location from './Location';
// const myLocation = new Location('CO/Denver');

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

  updateLocationForecast(thisLocation) {
    fetch(`http://api.wunderground.com/api/${thisLocation.key}/conditions/hourly/forecast10day/q/${thisLocation.query}.json`)
      .then(data => data.json())
      .then(data => { thisLocation.updateData(data); })
      .then(() => {
        this.updateLocation(thisLocation);
      });
  }

  componentDidMount() {
    if (localStorage.lastWeatherlySearch) {
      const retrievedLocation = new Location(localStorage.lastWeatherlySearch);
      this.updateLocationForecast(retrievedLocation);
      this.setState({
        location: retrievedLocation,
        currentWeatherClass: 'open',
        sideBarClass: 'side',
      });
    }
  }

  updateLocation(location) {
    this.setState({
      tenDay: location.dayForecast(),
      hourly: location.hourForecast(),
      currentWeather: location.currentConditions(),
    });
  }

  testInput(string) {
    const zipTest = /^[0-9]{5}$/;
    const cityStateTest = /^[A-Za-z ]*, [A-Za-z]{2}$/;
    if (zipTest.test(string)) {
      return string;
    }
    if (cityStateTest.test(string)) {
      const pieces = string.split(',');
      return `${pieces[1].trim().toUpperCase()}/${pieces[0].trim()}`;
    }
    return false;
  }

  searchLocation(location) {
    const query = this.testInput(location);
    console.log(query);
    if (query) {
      this.setState({
        location: query,
        currentWeatherClass: 'open',
        sideBarClass: 'side',
      });
      localStorage.lastWeatherlySearch = query;
      const newLocation = new Location(query);
      this.updateLocationForecast(newLocation);
    } else {
      alert(`"${location}" is not a valid query`)
    }
  }

  render() {
    return (
      <div id="everything">
        <CurrentWeather
          css={this.state.currentWeatherClass}
          now={this.state.currentWeather.now}
          temp={this.state.currentWeather.temp_c}
          high={this.state.currentWeather.high.celsius}
          low={this.state.currentWeather.low_c}
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
