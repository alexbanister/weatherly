import React from 'react';
import CurrentWeather from './CurrentWeather';
import Sidebar from './Sidebar';
import Data from './Data';
import Location from './Location';
const myLocation = new Location('CO/Denver');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tenDay: Data.tenDay,
      hourly: Data.hourly,
      currentWeather: Data.currentWeather,
    };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${myLocation.key}/conditions/hourly/forecast10day/q/${myLocation.query}.json`)
      .then(data => data.json())
      .then(data => { myLocation.data = data; })
      .then(() => {
        this.updateLocation(myLocation);
      });
  }

  updateLocation(location) {
    this.setState({
      tenDay: location.dayForecast(),
      hourly: location.hourForecast(),
      currentWeather: location.currentConditions(),
    });
  }

  render() {
    return (
      <div id="everything">
        <button onClick={this.updateLocation.bind(this)}>Click Me!</button>
        <CurrentWeather
          now={this.state.currentWeather.now}
          temp={this.state.currentWeather.temp_c}
          high={this.state.currentWeather.high.celsius}
          low={this.state.currentWeather.low_c}
          loc={this.state.currentWeather.loc}
          desc={this.state.currentWeather.desc}
          icon={this.state.currentWeather.icon} />
        <Sidebar
          tenDay={this.state.tenDay}
          hourly={this.state.hourly} />
      </div>
    );
  }
}
