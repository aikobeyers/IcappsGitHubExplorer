import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
