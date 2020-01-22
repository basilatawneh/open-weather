import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayInformationComponent} from './pages/weather-details/display-information/display-information.component'
import {WeatherInformationListComponent} from './pages/home/weather-information-list/weather-information-list.component'
import {CountrySearchComponent} from './pages/country-search/country-search.component'
import {LoginComponent} from './pages/login/login/login.component'
const routes: Routes = [
  
  {path: "",   redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: 'home', component: WeatherInformationListComponent},
  {path: 'details/:id', component: DisplayInformationComponent },
  {path: 'search', component: CountrySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DisplayInformationComponent,
                                   WeatherInformationListComponent,
                                   CountrySearchComponent]