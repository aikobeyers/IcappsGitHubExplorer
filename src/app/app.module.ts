import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarModule} from './navbar/navbar.module';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import {CategoriesModule} from './categories/categories.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        CategoriesModule,
        HomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
