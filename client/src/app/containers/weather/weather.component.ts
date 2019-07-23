import { Component, OnInit, Input } from '@angular/core';
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
    this.cities.forEach(city => {
      this.api.getCurrentWeather(city.name)
      .subscribe(data => {
        city.current_weather = data;
      });
    });
  }

}
