import { HotelLocationComponent } from './components/hotel/hotel-location/hotel-location.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthInterceptor } from './security/helper/auth.interceptor';
import { AuthService } from './security/helper/auth.service';
import { HomeComponent } from './layouts/home/home.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HotelDetailComponent } from './components/hotel/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './components/hotel/hotel-list/hotel-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeNavbarComponent } from './layouts/home-navbar/home-navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {ChartsModule} from 'ng2-charts'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    HotelListComponent,
    HotelDetailComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    HomeNavbarComponent,
    DashboardComponent,
    HotelLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
