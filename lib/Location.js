import Config from './config.js';

export default class Location {
  constructor(query) {
    this.query = query;
    this.data = {};
    this.key = Config.myKey;
  }
  update() {
    fetch(`http://api.wunderground.com/api/${this.key}/conditions/hourly/forecast10day/q/${this.query}.json`)
      .then(data => data.json())
      .then(data => { this.data = data; });
  }
  currentConditions() {
    return {
      temp_f: this.data.current_observation.temp_f,
      temp_c: this.data.current_observation.temp_c,
      weather: this.data.current_observation.weather,
      relative_humidity: this.data.current_observation.relative_humidity,
      wind_string: this.data.current_observation.wind_string,
      wind_dir: this.data.current_observation.wind_dir,
      wind_degrees: this.data.current_observation.wind_degrees,
      wind_mph: this.data.current_observation.wind_mph,
      wind_gust_mph: this.data.current_observation.wind_gust_mph,
      wind_kph: this.data.current_observation.wind_kph,
      wind_gust_kph: this.data.current_observation.wind_gust_kph,
      pressure_mb: this.data.current_observation.pressure_mb,
      pressure_in: this.data.current_observation.pressure_in,
      feelslike_f: this.data.current_observation.feelslike_f,
      feelslike_c: this.data.current_observation.feelslike_c,
      visibility_mi: this.data.current_observation.visibility_mi,
      visibility_km: this.data.current_observation.visibility_km,
      solarradiation: this.data.current_observation.solarradiation,
      precip_1hr_in: this.data.current_observation.precip_1hr_in,
      precip_1hr_metric: this.data.current_observation.precip_1hr_metric,
      word_forecast_day_us: this.data.forecast.txt_forecast.forecastday[0].fcttext,
      word_forecast_day_metric: this.data.forecast.txt_forecast.forecastday[0].fcttext_metric,
      word_forecast_night_us: this.data.forecast.txt_forecast.forecastday[1].fcttext,
      word_forecast_night_metric: this.data.forecast.txt_forecast.forecastday[1].fcttext_metric,
    };
  }

  dayForecast() {
    const tenDay = [];

    for (let i = 0; i < 10; i++) {
      tenDay.push({
        date: this.data.forecast.simpleforecast.forecastday[i].date,
        high: this.data.forecast.simpleforecast.forecastday[i].high,
        low: this.data.forecast.simpleforecast.forecastday[i].low,
        conditions: this.data.forecast.simpleforecast.forecastday[i].conditions,
        avehumidity: this.data.forecast.simpleforecast.forecastday[i].avehumidity,
        word_forecast_day_us: this.data.forecast.txt_forecast
        .forecastday[(i * 2)].fcttext,
        word_forecast_day_metric: this.data.forecast.txt_forecast
        .forecastday[(i * 2)].fcttext_metric,
        word_forecast_night_us: this.data.forecast.txt_forecast
        .forecastday[(i * 2) + 1].fcttext,
        word_forecast_night_metric: this.data.forecast.txt_forecast
        .forecastday[(i * 2) + 1].fcttext_metric,
      });
    }
    return tenDay;
  }

  hourForecast() {
    const sevenHour = [];

    for (let i = 0; i < 7; i++) {
      sevenHour.push({
        year: this.data.hourly_forecast[i].FCTTIME.year,
        month: this.data.hourly_forecast[i].FCTTIME.mon,
        day: this.data.hourly_forecast[i].FCTTIME.mday,
        hour: this.data.hourly_forecast[i].FCTTIME.hour,
        ampm: this.data.hourly_forecast[i].FCTTIME.hour,
        weekday_name: this.data.hourly_forecast[i].FCTTIME.ampm === 'AM' ?
        this.data.hourly_forecast[i].FCTTIME.weekday_name :
        this.data.hourly_forecast[i].FCTTIME.weekday_name_night,
        temp: this.data.hourly_forecast[i].temp,
        condition: this.data.hourly_forecast[i].condition,
        humidity: this.data.hourly_forecast[i].humidity,
        feelslike: this.data.hourly_forecast[i].feelslike,
      });
    }
    return sevenHour;
  }
}
