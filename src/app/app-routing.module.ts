import { SignInComponent } from './security/sign-in/sign-in.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HotelDetailComponent } from './components/hotel/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './components/hotel/hotel-list/hotel-list.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'hotel-list', component:HotelListComponent},
  {path:'hotel-detail/:id', component:HotelDetailComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
