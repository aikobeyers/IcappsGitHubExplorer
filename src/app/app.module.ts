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
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        CategoriesModule,
        HomeModule,
        ResultModule,
        HttpClientModule,
        BrowserAnimationsModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
