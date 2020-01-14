import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {WeatherData} from '../open-weather-data'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {

  private URL = "";
  private test = "assets/test.json";
  
  constructor(private http: HttpClient) { }

  getData() : Promise<any> {
    return new Promise ( (resolve,reject) => {
      this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d30d77467a30193c2c22a5a607772a7a',{responseType:"json"}).subscribe( data => {
        resolve(data);
      });
    });
  }
 

}
  