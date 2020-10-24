import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/components/home/home.component';
import {ResultsOverviewComponent} from './result/components/results-overview/results-overview.component';
import {ResultsDetailComponent} from './result/components/results-detail/results-detail.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'results', component: ResultsOverviewComponent},
  { path: 'results/:id', component: ResultsDetailComponent},
  { path: '', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
