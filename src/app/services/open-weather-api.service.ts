import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {WeatherData} from '../open-weather-data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {

  private URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private test = "assets/test.json";
  private currentGeoUrl = "https://api.openweathermap.org/data/2.5/weather";
  public appid = "24bd2a9a3ef0ff2c1b1456bd2f15a35f"
  constructor(private http: HttpClient) { }
  public fdata;
  // getData2() : Promise<any> {
  //   return new Promise ( (resolve,reject) => {
  //     this.http.get(this.URL,{responseType:"json"}).subscribe( data => {
  //       resolve(data);
  //     });
  //   });//
  // }
 getData(cityName): Observable<WeatherData>{
   
  return this.http.get<WeatherData>(this.URL+cityName+',ps&appid='+this.appid);

 }
getcurrentGeoWeather(): Observable<WeatherData>{

//return this.http.get(this.currentGeoUrl, { param })http://api.openweathermap.org/data/2.5/find?lat=31.527531&lon=35.101830&cnt=20&APPID=24bd2a9a3ef0ff2c1b1456bd2f15a35f
return this.http.get<WeatherData>("http://api.openweathermap.org/data/2.5/find?lat=31.527531&lon=35.101830&cnt=20&APPID=24bd2a9a3ef0ff2c1b1456bd2f15a35f");
}
getJson(): Observable<any>{
  return this.http.get<any>('assets/country.json');
}
}
  