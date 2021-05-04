import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-city',
  styleUrls: ['./city.component.scss'],
  template: `
    <h1>{{this.CountryName.Country}}'s Cities Corona cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.CountryName.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.CountryName.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.CountryName.TotalDeaths}}</span>
      <span class="tc" id="cases"><button (click)="onClick()" class="back">Back</button></span>
    </div>
    <div>
      <div *ngIf="flag">
        <tr class="th">
          <th class="cn">City Name</th>
          <th class="cn">Total Cases  </th>
          <th class="cn">Total Recovered Cases  </th>
          <th class="cn">Total Death</th>
        </tr>
          <tr *ngFor="let item of city">
            <td><button class="item"> {{item.Province}}</button></td>
            <td>{{item.Confirmed}}</td>
            <td>{{item.Recovered}}</td>
            <td>{{item.Deaths}}</td>
          </tr>
      </div>
      <div *ngIf="!flag" class="data">{{this.CountryName.Country}}'s Cities data not found!! </div>
    </div>
  `
})
export class CityComponent implements OnInit {
  flag = true;
  city;
  constructor(
    private appServices: AppService
  ) { }
  @Output() back: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input() CountryName;
  ngOnInit(): void {
    this.appServices.getcitydetail(this.CountryName.Country).subscribe((data) => {
      this.city = data;
      this.flag = !!this.city[0].Province;
    });
  }
  onClick(): void{
    this.back.emit(false);
  }


}
