import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-city',
  styleUrls: ['./city.component.scss'],
  template: `
  <h1>{{this.CountryName.Country}}'s Corona cases</h1>
  <div class="total">
    <span class="tc" id="cases">Total Cases:{{this.CountryName.TotalConfirmed}}</span>
    <span class="ac" id="cases">Total Recovered Cases:{{this.CountryName.TotalRecovered}}</span>
    <span class="death" id="cases">Total Death:{{this.CountryName.TotalDeaths}}</span>
    <span class="tc" id="cases"><button (click)="onClick()">Back</button></span>
  </div>
  <div>
    <tr class="th">
      <th class="cn">City Name</th>
      <th class="cn">Total Cases  </th>
      <th class="cn">Total Recovered Cases  </th>
      <th class="cn">Total Death</th>
    </tr>
    <tr >
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </div>
  `
})
export class CityComponent implements OnInit {

  country;
  constructor() { }
  @Output() back: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input() CountryName;
  ngOnInit(): void {
  }
  onClick(){
    this.back.emit(false);
  }



}
