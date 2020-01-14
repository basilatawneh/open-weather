import { Component, OnInit } from '@angular/core';
import {OpenWeatherAPIService} from '../services/open-weather-api.service'
import {WeatherData} from '../open-weather-data'
@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  constructor(private openWeatherData: OpenWeatherAPIService) { }
  public weatherData ;

  ngOnInit() {

   
    this.openWeatherData.getData().then( data => {
      this.weatherData=data;
      console.log(this.weatherData);
    });
   
  }

  getinfo(){
    // return this.openWeatherData.getData().subscribe(data => this.data2 = data);
    console.log(this.weatherData);
    alert(this.weatherData);
  }
}
