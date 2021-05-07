import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../../api-client.service';
import { City } from '../../models/City';
import { Weather } from '../../models/Weather';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  city: City;
  weather: Weather[];

  constructor(private route: ActivatedRoute, private api: ApiClientService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.params.forEach((params: Params) => {
      const cityId = params.cityId;
      this.weather = [];
      this.api.getCity(cityId)
      .subscribe(city => {
        this.city = city;
        this.city.info.weather.forEach(weather => {
          this.weather.push(Weather.parse(weather));
        });
      });
    });
  }
  update(city: City) {
    this.api.getForecastWeather(city.city_id)
    .subscribe(forecast => {
      this.api.saveWeather(city._id, {forecast})
      .subscribe(newCity => {
        this.getData();
      });
    });
  }

}
