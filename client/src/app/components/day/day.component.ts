import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../models/Weather';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() weather: Weather[];
  constructor() { }

  ngOnInit() {
  }

}
