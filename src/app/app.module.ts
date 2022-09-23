import { HotelDetailComponent } from './components/hostel/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './components/hostel/hotel-list/hotel-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    HotelListComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
