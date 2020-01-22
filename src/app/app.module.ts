import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {OpenWeatherAPIService} from './services/open-weather-api.service';
import { DisplayInformationComponent } from './pages/weather-details/display-information/display-information.component';
import { WeatherInformationListComponent } from './pages//home/weather-information-list/weather-information-list.component';
import { CountrySearchComponent } from './pages/country-search/country-search.component';
import { FreshPipe } from './Pipe/fresh.pipe'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {LoginComponent} from './pages/login/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    DisplayInformationComponent,
    routingComponents,
    WeatherInformationListComponent,
    CountrySearchComponent,
    LoginComponent,
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
