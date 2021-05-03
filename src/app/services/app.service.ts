import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string;
  constructor(
    private http: HttpClient
  ) { }
  getSummary(): Observable<any>{
    return this.http.get<any>('https://api.covid19api.com/summary');
  }
  getDetail(country: string): Observable<any>{
      this.url = 'https://api.covid19api.com/dayone/country/'+`${country}`;
      return this.http.get<any>(this.url);
  }
}
