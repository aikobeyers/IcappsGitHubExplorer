import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ghe-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  @Input()
  item: {
    label: string,
    link: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
