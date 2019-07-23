import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiClientService } from '../../api-client.service';

import { City } from '../../models/City';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @Input() cities: City[];
  @Output() save: EventEmitter<City> = new EventEmitter<City>();

  constructor(private api: ApiClientService) { }

  ngOnInit() {
  }

  onSave(city: City) {
    this.save.emit(city);
  }


}
