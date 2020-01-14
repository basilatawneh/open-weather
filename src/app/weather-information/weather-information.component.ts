import { Component, OnInit } from '@angular/core';
import {OpenWeatherAPIService} from './../open-weather-api.service'
import {WeatherData} from '../open-weather-data'
@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  constructor(private openWeatherData: OpenWeatherAPIService) { }
  public data2 ;

  ngOnInit() {

   
    this.openWeatherData.getData().subscribe(data => {
         
            console.log(data);
          });
  }

  getinfo(){
    return this.openWeatherData.getData().subscribe(data => this.data2 = data);
  }
}
