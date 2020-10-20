import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ghe-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems = [
    { label: 'Home', link: '/'},
    { label: 'Categories', link: '/categories'},
    { label: 'About', link: '/about'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
