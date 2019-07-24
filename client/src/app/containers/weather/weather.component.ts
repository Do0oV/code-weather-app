import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../../api-client.service';
import { City } from '../../models/City';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() cities: City[];

  constructor(private api: ApiClientService) { }

  ngOnInit() {
    this.getCities();
  }
  getCities(): void {
    this.api.getCities()
    .subscribe(data => {
      this.cities = data;
      this.cities.forEach(city => {
        this.api.getCurrentWeather(city.name)
        .subscribe(data => {
          city.current_weather = data;
        });
      });
    });
  }

  onSave(city: City) {
    this.api.getForecastWeather(city.city_id)
    .subscribe(forecast => {
      this.api.saveWeather(city._id, {forecast})
      .subscribe(newCity => {
        this.getCities();
      })

    })
  }


}
