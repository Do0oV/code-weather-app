import { Info } from './Info';
import { CurrentWeather } from './CurrentWeather';

export class City {
  name: string;
  country: string;
  city_id: string;
  info: null | Info;
  current_weather: null | CurrentWeather;
}

