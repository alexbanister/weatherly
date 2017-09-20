import React from 'react';
import CurrentWeather from './CurrentWeather';
import Sidebar from './Sidebar';
import Location from './Location';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      currentWeather: {
        now: 'Loading...',
        temp: '0',
        high: '0',
        low: '0',
        loc: 'Loading...',
        desc: 'Loading...',
        icon: 'clear',
      },
      location: '',
      currentWeatherClass: 'closed',
      sideBarClass: 'full',
    };
  }

  updateLocationForecast(thisLocation) {
    fetch(`http://api.wunderground.com/api/${thisLocation.key}/conditions/hourly/forecast10day/q/${thisLocation.query}.json`)
      .then(data => data.json())
      .then( data => {
        if (!data.response.error) {
          thisLocation.updateData(data);
          this.updateLocation(thisLocation); }
        else {
          this.badSearch(thisLocation.query);
        }})
      .catch();
  }

  loadQueryFromStorage() {
    const retrievedLocation = new Location(localStorage.lastWeatherlySearch);
    this.updateLocationForecast(retrievedLocation);
    this.setState({
      location: retrievedLocation,
      currentWeatherClass: 'open',
      sideBarClass: 'side',
    });
  }

  componentDidMount() {
    if (localStorage.lastWeatherlySearch) {
      this.loadQueryFromStorage();
    }
  }

  updateLocation(location) {
    this.setState({
      tenDay: location.dayForecast(),
      hourly: location.hourForecast(),
      currentWeather: location.currentConditions(),
    });
  }

  badSearch(badString, rejectedReason) {
    if (rejectedReason) {
      alert(`${badString} did not return any results. Error: ${rejectedReason}`);
    }
    else {
      alert(`"${badString}" is not a valid search. Enter a ZIP code or a City, State`);
    }
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

  searchLocation(requestedLocation) {
    const query = this.testInput(requestedLocation);
    if (query) {
      this.setState({
        location: query,
        currentWeatherClass: 'open',
        sideBarClass: 'side',
      });
      const newLocation = new Location(query);
      this.updateLocationForecast(newLocation);
    } else {
      this.badSearch(requestedLocation);
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
