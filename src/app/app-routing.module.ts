import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CategoriesOverviewComponent} from './categories/components/categories-overview/categories-overview.component';
import {HomeComponent} from './home/components/home/home.component';
import {ResultsOverviewComponent} from './result/components/results-overview/results-overview.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CategoriesOverviewComponent },
  { path: 'results', component: ResultsOverviewComponent},
  { path: '', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
