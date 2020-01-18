import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {WeatherData} from '../open-weather-data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {

  private URL = 'https://api.openweathermap.org/data/2.5/forecast?';
  private test = "assets/test.json";
  private iconURL ="http://openweathermap.org/img/wn/"
  public appid = "24bd2a9a3ef0ff2c1b1456bd2f15a35f"
  constructor(private http: HttpClient) { }
  public fdata;

 getData(param1): Observable<WeatherData>{
   const param2 = {
 
      'appid': this.appid
   }
   const finalparam = {...param1, ...param2};
  return this.http.get<WeatherData>(this.URL,{params:finalparam});

 }

getcurrentGeoWeather(): Observable<WeatherData>{

//return this.http.get(this.currentGeoUrl, { param })http://api.openweathermap.org/data/2.5/find?lat=31.527531&lon=35.101830&cnt=20&APPID=24bd2a9a3ef0ff2c1b1456bd2f15a35f
return this.http.get<WeatherData>("http://api.openweathermap.org/data/2.5/find?lat=31.527531&lon=35.101830&cnt=20&APPID=24bd2a9a3ef0ff2c1b1456bd2f15a35f");
}

getJson(): Observable<any>{
  return this.http.get<any>('assets/country.json');
}
}
  