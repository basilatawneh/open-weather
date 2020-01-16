import { Component, OnInit, Input} from '@angular/core';
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
  @Input() weatherinfo;
  ngOnInit() {

   
    // this.openWeatherData.getData().then( data => {
    //   this.weatherData=data;
    //   console.log(this.weatherData);
    // });

  }

  getinfo(cityName){
    // return this.openWeatherData.getData().subscribe(data => this.data2 = data);
    // this.openWeatherData.getData().subscribe(data =>{
    //   this.weatherData = data;
  
    //  });
    this.weatherData = this.openWeatherData.getData(cityName);
    console.log(this.weatherData);
  }
}
