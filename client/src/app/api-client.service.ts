import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from './models/City';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  serverBaseUrl: string = 'http://localhost:4000';
  weatherApiBaseUrl: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = '';

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.serverBaseUrl}/getAll`);
  }
}
