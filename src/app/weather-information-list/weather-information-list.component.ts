import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {OpenWeatherAPIService} from './../services/open-weather-api.service'

@Component({
  selector: 'app-weather-information-list',
  templateUrl: './weather-information-list.component.html',
  styleUrls: ['./weather-information-list.component.scss']
})
export class WeatherInformationListComponent implements OnInit {
  t=[0,1,2,3,4]
  constructor(private router: Router,private openWeatherData: OpenWeatherAPIService) { }
  public weatherData;
  ngOnInit() {
    this.openWeatherData.getcurrentGeoWeather()
      .subscribe( data => this.weatherData = data );
    console.log(this.weatherData);
  }
  onselect(id){
    this.router.navigate(['/details',id]);
  }
  getin(cityName){
    this.openWeatherData.getData(cityName)
      .subscribe( data => this.weatherData = data );
    console.log(this.weatherData);
    console.log(this.weatherData);
  }
}
