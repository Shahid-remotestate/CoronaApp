import {Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <nav>
<!--      <button type="button" routerLink="world" class="a">World</button>-->
      <button type="button" routerLink="/" class="a">Home</button>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  constructor(
  ) {
  }
  ngOnInit(): void{
  }
}

