import {Component, OnInit, } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-detail-with-date *ngIf="flag2" (BackToDetail)="DetailBack($event)" [CountryDetail]="this.countrydata"></app-detail-with-date>
  <div [style.display]="(flag2?'none':'')">
    <h1>WorldWide Corona Cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.summary?.Global.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.summary?.Global.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.summary?.Global.TotalDeaths}}</span>
    </div>
    <div>
        <tr class="th">
          <th class="cn">Country Name</th>
          <th class="cn">Total Cases  </th>
          <th class="cn">Total Recovered Cases  </th>
          <th class="cn">Total Death</th>
        </tr>
        <tr *ngFor="let item of this.summary?.Countries">
              <td ><button  class="item">{{item.Country}}</button><button (click)="detailClick(item)" class="detail">Details</button></td>
              <td >{{item.TotalConfirmed}}</td>
              <td >{{item.TotalRecovered}}</td>
              <td >{{item.TotalDeaths}}</td>
        </tr>
    </div>
  </div>

  `
})
export class AppComponent implements OnInit{
  summary;
  flag2 = false;
  countrydata;
  title = 'coronacases';
  constructor(
    private appservices: AppService
  ) {
  }
  ngOnInit(): void {
    this.appservices.getSummary().subscribe((data) => this.summary = data);
  }
  detailClick(event): void{
    this.countrydata = event;
    this.flag2 = !this.flag2;
  }
  DetailBack(event): void{
    this.flag2 = event;
  }
}
