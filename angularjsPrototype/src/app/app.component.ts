import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      {{date}}
    </div>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About Us</a></li>
      <li><a routerLink="/services">Our Services</a></li>
      <li><a routerLink="/customers">Our Customers</a></li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class AppComponent  {
  private date: any;
  constructor() { 
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 
}
 
