import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {WeatherData} from './open-weather-data'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {

  private URL = "https://samples.openweathermap.org/data/2.5/forecast?q=Hebron,%20PS&appid=d30d77467a30193c2c22a5a607772a7a";
  private test = "assets/test.json";
  
  constructor(private http :HttpClient) { }

  getData(){
    return this.http.get(this.URL);
  }
}
