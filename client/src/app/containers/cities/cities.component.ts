import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../api-client.service';
import  { City } from '../../models/City';
import  { CurrentWeather } from '../../models/CurrentWeather';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(private api: ApiClientService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.api.getCities()
    .subscribe(data => {
      this.cities = data;
    });
  }

}
