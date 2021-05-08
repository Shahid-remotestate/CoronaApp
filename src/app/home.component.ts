import {Component, OnInit, } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'home-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div >
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
              <td class="row1"><button type="button" [routerLink]="[item.Country , 'state']" class="item" >{{item.Country}}</button><button type="button" [routerLink]="[item.Country,'detail']" class="detail">Details</button></td>
              <td class="row2">{{item.TotalConfirmed}}</td>
              <td class="row3">{{item.TotalRecovered}}</td>
              <td class="row4">{{item.TotalDeaths}}</td>
        </tr>
    </div>
  </div>

  `
})
export class HomeComponent implements OnInit{
  summary;
  items: string;
  countrydata;
  title = 'coronacases';
  constructor(
    private appservices: AppService
  ) {
  }
  ngOnInit(): void {
    this.appservices.getSummary().subscribe((data) => this.summary = data);
  }
}
