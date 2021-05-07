import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { City } from "./models/City";
import { CurrentWeather } from "./models/CurrentWeather";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ApiClientService {
  serverBaseUrl: string = "http://localhost:4000";
  weatherApiBaseUrl: string = "https://api.openweathermap.org/data/2.5";
  apiKey: string = "";

  constructor(private http: HttpClient) {}

  // Server
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.serverBaseUrl}/getAll`);
  }

  getCity(id): Observable<City> {
    return this.http.get<City>(`${this.serverBaseUrl}/getOne/${id}`);
  }

  saveWeather(id, forecast): Observable<City> {
    return this.http.put<City>(
      `${this.serverBaseUrl}/save/${id}`,
      forecast,
      httpOptions
    );
  }

  // Openweathermap
  getCurrentWeather(city): Observable<any> {
    return this.http
      .get<CurrentWeather>(
        `${this.weatherApiBaseUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`
      )
      .pipe(map((current) => CurrentWeather.parse(current)));
  }

  getForecastWeather(cityId): Observable<any> {
    return this.http.get<any>(
      `${this.weatherApiBaseUrl}/forecast?id=${cityId}&units=metric&appid=${this.apiKey}`
    );
  }
}
