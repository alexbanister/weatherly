import Config from './config.js';

export default class Location {
  constructor(query) {
    this.query = query;
    this.key = Config.myKey;
    this.data = {};
  }

  pushToStorage() {

  }

  updateData(data) {
    this.data = data;
    localStorage.lastWeatherlySearch = this.query;
  }

  currentConditions() {
    let prefix = '';

    if (/nt_/.test(this.data.current_observation.icon_url)) {
      prefix = 'nt_'
    }
    return {
      now: this.data.current_observation.observation_time,
      // temp_f: this.data.current_observation.temp_f,
      temp_c: this.data.current_observation.temp_c,
      high: this.data.forecast.simpleforecast.forecastday[0].high,
      high_f: this.data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      high_c: this.data.forecast.simpleforecast.forecastday[0].high.celsius,
      low_f: this.data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      low_c: this.data.forecast.simpleforecast.forecastday[0].low.celsius,
      loc: this.data.current_observation.display_location.full,
      desc: this.data.forecast.txt_forecast.forecastday[0].fcttext_metric,
      icon: `${prefix}${this.data.current_observation.icon}`,
      // weather: this.data.current_observation.weather,
      // relative_humidity: this.data.current_observation.relative_humidity,
      // wind_string: this.data.current_observation.wind_string,
      // wind_dir: this.data.current_observation.wind_dir,
      // wind_degrees: this.data.current_observation.wind_degrees,
      // wind_mph: this.data.current_observation.wind_mph,
      // wind_gust_mph: this.data.current_observation.wind_gust_mph,
      // wind_kph: this.data.current_observation.wind_kph,
      // wind_gust_kph: this.data.current_observation.wind_gust_kph,
      // pressure_mb: this.data.current_observation.pressure_mb,
      // pressure_in: this.data.current_observation.pressure_in,
      // feelslike_f: this.data.current_observation.feelslike_f,
      // feelslike_c: this.data.current_observation.feelslike_c,
      // visibility_mi: this.data.current_observation.visibility_mi,
      // visibility_km: this.data.current_observation.visibility_km,
      // solarradiation: this.data.current_observation.solarradiation,
      // precip_1hr_in: this.data.current_observation.precip_1hr_in,
      // precip_1hr_metric: this.data.current_observation.precip_1hr_metric,
      // word_forecast_day_us: this.data.forecast.txt_forecast.forecastday[0].fcttext,
      // word_forecast_night_us: this.data.forecast.txt_forecast.forecastday[1].fcttext,
      // word_forecast_day_metric: this.data.forecast.txt_forecast.forecastday[0].fcttext_metric,
      // word_forecast_night_metric: this.data.forecast.txt_forecast.forecastday[1].fcttext_metric,
    };
  }

  dayForecast() {
    const tenDay = [];

    for (let i = 0; i < 10; i++) {
      tenDay.push({
        date: this.data.forecast.simpleforecast.forecastday[i].date,
        day: this.data.forecast.simpleforecast.forecastday[i].date.weekday_short,
        high_f: this.data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
        high_c: this.data.forecast.simpleforecast.forecastday[i].high.celsius,
        low_f: this.data.forecast.simpleforecast.forecastday[i].low.fahrenheit,
        low_c: this.data.forecast.simpleforecast.forecastday[i].low.celsius,
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
        icon: this.data.forecast.simpleforecast.forecastday[i].icon,
      });
    }
    return tenDay;
  }

  hourForecast() {
    const sevenHour = [];
    let prefix = '';

    for (let i = 0; i < 7; i++) {
      if (/nt_/.test(this.data.hourly_forecast[i].icon_url)) {
        prefix = 'nt_'
      }
      sevenHour.push({
        year: this.data.hourly_forecast[i].FCTTIME.year,
        month: this.data.hourly_forecast[i].FCTTIME.mon,
        day: this.data.hourly_forecast[i].FCTTIME.mday,
        hour: this.data.hourly_forecast[i].FCTTIME.hour,
        ampm: this.data.hourly_forecast[i].FCTTIME.ampm,
        weekday_name: this.data.hourly_forecast[i].FCTTIME.ampm === 'AM' ?
        this.data.hourly_forecast[i].FCTTIME.weekday_name :
        this.data.hourly_forecast[i].FCTTIME.weekday_name_night,
        temp_f: this.data.hourly_forecast[i].temp.english,
        temp_c: this.data.hourly_forecast[i].temp.metric,
        condition: this.data.hourly_forecast[i].condition,
        humidity: this.data.hourly_forecast[i].humidity,
        feelslike_f: this.data.hourly_forecast[i].feelslike.english,
        feelslike_c: this.data.hourly_forecast[i].feelslike.metric,
        icon: `${prefix}${this.data.hourly_forecast[i].icon}`,
      });
    }
    return sevenHour;
  }
}
