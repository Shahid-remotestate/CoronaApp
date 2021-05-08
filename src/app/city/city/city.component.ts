import {Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  styleUrls: ['./city.component.scss'],
  template: `
    <h1>{{this.CountryName.substring(0,1).toUpperCase()+this.CountryName.substring(1, this.CountryName.length)}}'s States Corona cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.CountryData?.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.CountryData?.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.CountryData?.TotalDeaths}}</span>
      <span class="tc" id="cases"><button type="button" routerLink="/" class="back">Back</button></span>
    </div>
    <div>
      <div *ngIf="flag">
        <tr class="th">
          <th class="cn">State Name</th>
          <th class="cn">Total Cases  </th>
          <th class="cn">Total Recovered Cases  </th>
          <th class="cn">Total Death</th>
        </tr>
          <tr *ngFor="let item of city">
            <td class="row1"><button class="item"> {{item.Province}}</button></td>
            <td class="row2">{{item.Confirmed}}</td>
            <td class="row3">{{item.Recovered}}</td>
            <td class="row4">{{item.Deaths}}</td>
          </tr>
      </div>
      <div *ngIf="!flag" class="data">{{this.CountryName}}'s states data not found!! </div>
    </div>
  `
})
export class CityComponent implements OnInit {
  flag = true;
  city;
  CountryName: string;
  CountryData;
  constructor(
    private appServices: AppService,
    private routes: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.routes.paramMap.subscribe(data => this.CountryName = data.get('country'));
    this.appServices.getcitydetail(this.CountryName).subscribe((data) => {
      this.city = data;
      this.flag = !!this.city[0].Province;
    });
    this.appServices.getSummary().subscribe(data => {
      for(const element of data.Countries){
        if (element.Country === this.CountryName){
          this.CountryData = element;
          break;
        }
      }
    });
  }
}
