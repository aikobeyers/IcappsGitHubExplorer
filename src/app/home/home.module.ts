import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {GheCommonModule} from '../common/ghe-common.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    GheCommonModule,
    CommonModule
  ]
})
export class HomeModule { }
