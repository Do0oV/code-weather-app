export class CurrentWeather {
  temp: number;
  humidity: number;
  description: string;
  icon: string;

  static parse(data) {
    const current = {
      temp: data.main.temp.toFixed(1),
      humidiy: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
    return current;
  }
}

