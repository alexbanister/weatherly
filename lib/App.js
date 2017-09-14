import React from 'react';
import DayCard from './DayCard';
import HourlyCard from './HourlyCard';
import CurrentWeather from './CurrentWeather';
import Data from './Data';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tenDay: Data.tenDay,
      hourly: Data.hourly,
      currentWeather: Data.currentWeather,
    };
  }

  render() {
    return (
      <div id="everything">
        <CurrentWeather
          now={this.state.currentWeather.now}
          temp={this.state.currentWeather.temp}
          high={this.state.currentWeather.high}
          low={this.state.currentWeather.low}
          loc={this.state.currentWeather.loc}
          icon={this.state.currentWeather.icon} />
        <aside>
          <div className="hamburger-button">
            <img src="../assets/images/hamburger.svg" alt="" />
          </div>
          <header>
            <h1>Weatherly</h1>
            <input type="text" />
          </header>
          <section className="seven-hour">
            Next 7 hours:
            <div className="hourly">
              {
                this.state.hourly.map((hour, index) => {
                  return (
                    <HourlyCard
                      key={index}
                      hour={hour.hour}
                      icon={hour.icon}
                      temp={hour.temp} />
                  )
                })
              }
            </div>
          </section>
          <section className="ten-day">
            Next 10 Days:
            <div className="ten-day-scroll">
              {
                this.state.tenDay.map((day, index) => {
                  return (
                    <DayCard
                      key={index}
                      day={day.day}
                      icon={day.icon}
                      low={day.low}
                      high={day.high} />
                  )
                })
              }
            </div>
          </section>
        </aside>
      </div>
    );
  }
}
