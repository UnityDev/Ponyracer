import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarCollapsed: boolean;



  constructor() {
    this.navbarCollapsed = true;
  }

  ngOnInit() {
  }

  toggleNavbar(){
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
