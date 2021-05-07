import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { City } from '../../models/City';

@Component({
  selector: 'app-city-list-item',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {

  @Input() city: City;

  @Output() save: EventEmitter<City> = new EventEmitter<City>();
  constructor() { }

  ngOnInit() {
  }

  seeDetails(id) {
    return `/city/${id}`;
  }

  subscribe(city: City) {
    this.save.emit(city);
  }

}
