import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailWithDateComponent } from './DetailWithDate/detail-with-date/detail-with-date.component';
import { CityComponent } from './city/city/city.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';

import { NotfountComponent } from './notfount.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailWithDateComponent,
    CityComponent,
    HomeComponent,
    NotfountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
