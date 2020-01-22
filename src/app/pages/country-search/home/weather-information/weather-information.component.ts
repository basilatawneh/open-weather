import { Component, OnInit, Input} from '@angular/core';
import {OpenWeatherAPIService} from '../../../../services/open-weather-api.service'
import {WeatherData} from '../../../../open-weather-data'

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  constructor(private openWeatherData: OpenWeatherAPIService) { }
  public weatherData ;
  @Input() weatherinfo;
  @Input() day;

  ngOnInit() {

   
  }


}
