import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherInformationComponent} from './weather-information/weather-information.component'
import {DisplayInformationComponent} from './display-information/display-information.component'
import {WeatherInformationListComponent} from './weather-information-list/weather-information-list.component'
import {CountrySearchComponent} from './country-search/country-search.component'
const routes: Routes = [
  {path: "", component: WeatherInformationListComponent},
  {path: 'information', component: WeatherInformationComponent},
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