const { Weather, Info } = require('../models/city');
const moment = require('moment');
moment().format();

exports.parseWeather = (forecast) => {

  const res = [];
  const today = moment().format('YYYY-MM-DD');

  // extracting current weather
  const currentWeather = forecast.list.find(el => {
    return el.dt_txt.includes(today);
  });
  const currentWeatherObj = {
    day: currentWeather.dt_txt,
    temp: currentWeather.main.temp,
    humidity: currentWeather.main.humidity,
    description: currentWeather.weather[0].description,
    icon: currentWeather.weather[0].icon
  };
  res.push(currentWeatherObj);

  // extracting weather for next 4 days
  const dailyData = forecast.list
  .filter(el => {
    return el.dt_txt.includes('18:00:00') && !el.dt_txt.includes(today)
  })
  .forEach(el => {
    const weatherObj = {
      day: el.dt_txt,
      temp: el.main.temp,
      humidity: el.main.humidity,
      description: el.weather[0].description,
      icon: el.weather[0].icon
    };
    res.push(weatherObj);
  });

  const myInfo = new Info({
    date: Date.now(),
    weather: res.map(el => {
      const weather = new Weather({
        day: el.day,
        temp: el.temp,
        humidity: el.humidity,
        description: el.description,
        icon: el.icon
      });
      return weather;
    })
  });
  return myInfo;
}