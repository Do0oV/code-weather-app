export class CurrentWeather {
  temp: number;
  humidity: number;
  description: string;
  icon: string;

  static parse(data) {

    const assignIcon = (code) => {
      const iconUrl = 'assets/icons/';
      switch (code) {
        case '01d':
        case '01n':
          return `${iconUrl}sun.svg`;
          break;
        case '02d':
        case '02n':
          return `${iconUrl}cloudy.svg`;
          break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          return `${iconUrl}clouds.svg`;
          break;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
          return `${iconUrl}rain.svg`;
          break;
        case '11d':
        case '11n':
          return `${iconUrl}storm.svg`;
          break;
        case '13d':
        case '13n':
          return `${iconUrl}snow.svg`;
          break;
        case '50d':
        case '50n':
          return `${iconUrl}fog.svg`;
          break;
        default:
          return `${iconUrl}sun.svg`;
          break;
      }
    };

    const current = {
      temp: Math.round(data.main.temp),
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: assignIcon(data.weather[0].icon)
    };

    return current;
  }
}

