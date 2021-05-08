import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {DetailWithDateComponent} from './DetailWithDate/detail-with-date/detail-with-date.component';
import {NotfountComponent} from './notfount.component';
import {CityComponent} from './city/city/city.component';

const routes: Routes = [
  { path: '' ,
    component: HomeComponent
  },
  {
    path: ':countryname/detail' ,
    component: DetailWithDateComponent
  },
  {
    path: ':country/state' ,
    component: CityComponent
  },
  {
    path: '**' ,
    component: NotfountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
