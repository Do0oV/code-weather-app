import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from './models/City';
import { CurrentWeather } from './models/CurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  serverBaseUrl: string = 'http://localhost:4000';
  weatherApiBaseUrl: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = '4f510f6aeb0a818ddd35fad7382c0c9c';

  constructor(private http: HttpClient) { }

  // Server
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.serverBaseUrl}/getAll`);
  }

  getCity(id): Observable<City> {
    return this.http.get<City>(`${this.serverBaseUrl}/getOne/${id}`);
  }

  saveWeather(id, forecast): Observable<City> {
    return this.http.put<City>(`${this.serverBaseUrl}/save/${id}`, forecast);
  }

  // Openweathermap
  getCurrentWeather(city): Observable<any> {
    return this.http.get<CurrentWeather>(`${this.weatherApiBaseUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`)
      .pipe(map(current => CurrentWeather.parse(current)));
  }
/*
  getForecastWeather(city): Observable<any> {

  }*/
}
