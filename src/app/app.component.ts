import {Component, OnInit, } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-city *ngIf="flag" (back)="backHandle($event)" [CountryName]="this.countrydata"></app-city>
    <app-detail-with-date *ngIf="flag2" (BackToDetail)="DetailBack($event)" [CountryDetail]="this.countrydata"></app-detail-with-date>
  <div [style.display]="(flag||flag2?'none':'')">
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
              <td *ngIf="!flag"><button (click)="onClick(item)" class="item">{{item.Country}}</button><button (click)="detailClick(item)" class="detail">Details</button></td>
              <td *ngIf="!flag">{{item.TotalConfirmed}}</td>
              <td *ngIf="!flag">{{item.TotalRecovered}}</td>
              <td *ngIf="!flag">{{item.TotalDeaths}}</td>
        </tr>
    </div>
  </div>

  `
})
export class AppComponent implements OnInit{
  summary;
  flag = false;
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
  onClick(item): void{
    this.countrydata = item;
    this.flag = !this.flag;
  }
  backHandle(event): void{
    this.flag = event;
  }
  detailClick(event): void{
    this.countrydata = event;
    this.flag2 = !this.flag2;
  }
  DetailBack(event): void{
    this.flag2 = event;
  }
}
