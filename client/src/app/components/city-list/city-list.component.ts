import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from '../../api-client.service';

import { City } from '../../models/City';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @Input() cities: City[];

  constructor(private api: ApiClientService) { }

  ngOnInit() {

  }


}
