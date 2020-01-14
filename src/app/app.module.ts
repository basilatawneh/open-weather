import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';
import {OpenWeatherAPIService} from './services/open-weather-api.service';
import { HeaderComponent } from './header/header.component';
import { DisplayInformationComponent } from './display-information/display-information.component';
import { WeatherInformationListComponent } from './weather-information-list/weather-information-list.component'
@NgModule({
  declarations: [
    AppComponent,
    WeatherInformationComponent,
    HeaderComponent,
    DisplayInformationComponent,
    routingComponents,
    WeatherInformationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [OpenWeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
  private openWeatherData: OpenWeatherAPIService;

 }
