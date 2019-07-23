import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/City';

@Component({
  selector: 'app-city-list-item',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {

  @Input() city: City;
  constructor() { }

  ngOnInit() {
  }

}
