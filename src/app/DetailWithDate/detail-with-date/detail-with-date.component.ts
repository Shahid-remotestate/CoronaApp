import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppService } from '../../services/app.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-with-date',
  styleUrls: ['./detail-with-date.component.scss'],
  template: `
    <h1>{{this.CountryDetail}}'s Details Corona cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.CountryData?.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.CountryData?.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.CountryData?.TotalDeaths}}</span>
      <span class="tc" id="cases"><button type="button" routerLink="/" class="back">Back</button><button class="back" (click)="Onflag()">{{this.flag?'ASC':'DESC'}}</button></span>
    </div>
    <div>
      <tr class="th">
        <th class="cn">Dates</th>
        <th class="cn">New Cases</th>
        <th class="cn">Total Cases  </th>
        <th class="cn">New Recovered Cases</th>
        <th class="cn">Total Recovered Cases  </th>
        <th class="cn">New Death</th>
        <th class="cn">Total Death</th>
      </tr>
      <tr *ngFor="let item of detailData;let i = index">
        <td class="date">{{flag? this.detailData[this.detailData.length-1-i].Date.substring(0,10) : item.Date.substring(0,10)}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Confirmed-this.detailData[this.detailData.length-2-i]?.Confirmed: item.Confirmed-this.detailData[i-1]?.Confirmed}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Confirmed : item.Confirmed}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Recovered-this.detailData[this.detailData.length-2-i]?.Recovered: item.Recovered-this.detailData[i-1]?.Recovered}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Recovered : item.Recovered}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Deaths-this.detailData[this.detailData.length-2-i]?.Deaths: item.Deaths-this.detailData[i-1]?.Deaths}}</td>
        <td>{{flag? this.detailData[this.detailData.length-1-i].Deaths : item.Deaths}}</td>
      </tr>
    </div>
  `
})
export class DetailWithDateComponent implements OnInit {
  detailData;
  flag = true;
  CountryDetail: string;
  CountryData;
  constructor(private appService: AppService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => this.CountryDetail = data.get('countryname'));
    this.appService.getDetail(this.CountryDetail).subscribe((data) => this.detailData = data);
    this.appService.getSummary().subscribe(data => {
      for (const item of data.Countries){
        if ( item.Country === this.CountryDetail){
          this.CountryData = item;
        }
      }
    });
  }
  Onflag(): void{
    this.flag = !this.flag;
  }

}
