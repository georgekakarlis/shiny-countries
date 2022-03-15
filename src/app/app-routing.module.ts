import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { HomePageComponent } from './home-page/home-page.component';


//Route Path Definition
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'details/:country',
    component: CountryDetailsComponent
  },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
