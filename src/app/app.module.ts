import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city/city.component';
import { DetailWithDateComponent } from './DetailWithDate/detail-with-date/detail-with-date.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DetailWithDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
