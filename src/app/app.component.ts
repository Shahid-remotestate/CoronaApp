import {Component, OnInit, } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-city *ngIf="flag" (back)="backHandle($event)" [CountryName]="this.items"></app-city>
  <div [style.display]="(flag?'none':'')">
    <h1>WorldWide Corona Cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.summary?.Global.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.summary?.Global.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.summary?.Global.TotalDeaths}}</span>
    </div>
    <div>
        <tr class="th">
          <th class="cn">Country Name</th>
          <th class="cn">Totol Cases  </th>
          <th class="cn">Total Recovered Cases  </th>
          <th class="cn">Total Death</th>
        </tr>
        <tr *ngFor="let item of this.summary?.Countries">
              <td *ngIf="!flag"><button (click)="onClick(item.Country)">{{item.Country}}</button></td>
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
  items: string;
  flag = false;
  flag2: string;
  title = 'coronacases';

  // -----------click handle--------------- //
  constructor(
    private appservices: AppService
  ) {
  }
  ngOnInit() {
    this.appservices.getSummary().subscribe((data) => this.summary = data);
  }
  onClick(item){
    this.items = item;
    this.flag = !this.flag;
  }
  // ---------------------------- //
  backHandle(event){
    this.flag=event;
  }
}
