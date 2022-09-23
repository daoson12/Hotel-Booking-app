import { HotelListComponent } from './components/hostel/hotel-list/hotel-list.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'hotel-list', component:HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
