import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformationComponent } from './home/weather-information/weather-information.component';
import {OpenWeatherAPIService} from './services/open-weather-api.service';
import { HeaderComponent } from './header/header.component';
import { DisplayInformationComponent } from './weather-details/display-information/display-information.component';
import { WeatherInformationListComponent } from './home/weather-information-list/weather-information-list.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import { FreshPipe } from './Pipe/fresh.pipe'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    WeatherInformationComponent,
    HeaderComponent,
    DisplayInformationComponent,
    routingComponents,
    WeatherInformationListComponent,
    CountrySearchComponent,
    FreshPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [OpenWeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
  private openWeatherData: OpenWeatherAPIService;

 }
