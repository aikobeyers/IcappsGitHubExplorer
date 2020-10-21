import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsOverviewComponent } from './components/results-overview/results-overview.component';
import {GheCommonModule} from '../common/ghe-common.module';
import { ResultsListComponent } from './components/results-list/results-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultsListRowComponent } from './components/results-list-row/results-list-row.component';
import { ResultsDetailComponent } from './components/results-detail/results-detail.component';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [ResultsOverviewComponent, ResultsListComponent, ResultsListRowComponent, ResultsDetailComponent],
  imports: [
    CommonModule,
    GheCommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class ResultModule { }
