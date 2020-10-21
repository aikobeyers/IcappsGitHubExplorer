import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarModule} from './navbar/navbar.module';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import {CategoriesModule} from './categories/categories.module';
import {HomeModule} from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {ResultModule} from './result/result.module';

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
        HomeModule,
        ResultModule,
        HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
