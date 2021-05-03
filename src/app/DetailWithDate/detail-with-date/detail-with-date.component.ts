import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-detail-with-date',
  styleUrls: ['./detail-with-date.component.scss'],
  template: `
    <h1>{{this.CountryDetail.Country}}'s Details Corona cases</h1>
    <div class="total">
      <span class="tc" id="cases">Total Cases:{{this.CountryDetail.TotalConfirmed}}</span>
      <span class="ac" id="cases">Total Recovered Cases:{{this.CountryDetail.TotalRecovered}}</span>
      <span class="death" id="cases">Total Death:{{this.CountryDetail.TotalDeaths}}</span>
      <span class="tc" id="cases"><button (click)="onBack()" class="back">Back</button></span>
    </div>
    <div>
      <tr class="th">
        <th class="cn">Dates</th>
        <th class="cn">Total Cases  </th>
        <th class="cn">Total Recovered Cases  </th>
        <th class="cn">Total Death</th>
      </tr>
      <tr *ngFor="let item of detailData">
        <td class="date">{{item.Date.substring(0,10)}}</td>
        <td>{{item.Confirmed}}</td>
        <td>{{item.Recovered}}</td>
        <td>{{item.Deaths}}</td>
      </tr>
    </div>
  `
})
export class DetailWithDateComponent implements OnInit {
  detailData;
  @Input() CountryDetail;

  @Output() BackToDetail: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor( private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDetail(this.CountryDetail.Country).subscribe((data) => this.detailData = data);
  }
  onBack(): void {
    this.BackToDetail.emit(false);
  }

}
