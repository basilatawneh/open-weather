import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';
import {OpenWeatherAPIService} from './open-weather-api.service';
import { HeaderComponent } from './header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    WeatherInformationComponent,
    HeaderComponent
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
