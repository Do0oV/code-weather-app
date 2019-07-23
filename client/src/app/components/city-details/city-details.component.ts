import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../../api-client.service';
import { City } from '../../models/City';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  city: City;

  constructor(private route: ActivatedRoute, private api: ApiClientService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const cityId = params.cityId;
      this.api.getCity(cityId)
      .subscribe(city => {
        this.city = city;
      });
    });
  }

}
