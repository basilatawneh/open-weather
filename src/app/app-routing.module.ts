import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherInformationComponent} from './home/weather-information/weather-information.component'
import {DisplayInformationComponent} from './weather-details/display-information/display-information.component'
import {WeatherInformationListComponent} from './home/weather-information-list/weather-information-list.component'
import {CountrySearchComponent} from './country-search/country-search.component'
const routes: Routes = [
  
  {path: "",   redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WeatherInformationListComponent},
  {path: 'details/:id', component: DisplayInformationComponent },
  {path: 'search', component: CountrySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WeatherInformationComponent,
                                   DisplayInformationComponent,
                                   WeatherInformationListComponent,
                                   CountrySearchComponent]