import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {WeatherData} from '../open-weather-data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {

  private URL = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=24bd2a9a3ef0ff2c1b1456bd2f15a35f';
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
 getData(): Observable<WeatherData>{
   
  return this.http.get<WeatherData>(this.URL/*,{responseType:"json"}*/);

 }
getcurrentGeoWeather(lat, lon){
let param = new HttpParams()
.set('lat', lat)
.set('lan', lon)
.set('units', 'imperial')
.set('appid', this.appid)
//return this.http.get(this.currentGeoUrl, { param })
}
}
  