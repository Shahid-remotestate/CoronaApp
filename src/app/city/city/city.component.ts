import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-city',
  styleUrls: ['./city.component.scss'],
  template: `
  <h1>{{this.CountryName}}'s Corona cases</h1>
  <div class="total">
    <span class="tc" id="cases">Total Cases:</span>
    <span class="ac" id="cases">Total Recovered Cases:</span>
    <span class="death" id="cases">Total Death:</span>
    <span class="tc" id="cases"><button (click)="onClick()">Back</button></span>
  </div>
  <div>
    <tr class="th">
      <th class="cn">City Name</th>
      <th class="cn">Totol Cases  </th>
      <th class="cn">Total Recovered Cases  </th>
      <th class="cn">Total Death</th>
    </tr>
    <tr >
      <td>item.City</td>
      <td>item.TotalConfirmed</td>
      <td>item.TotalRecovered</td>
      <td>item.TotalDeaths</td>
    </tr>
  </div>
  `
})
export class CityComponent implements OnInit {

  country;
  constructor() { }
  @Output() back: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input() CountryName: string;
  ngOnInit(): void {
  }
  onClick(){
    this.back.emit(false);
  }



}
