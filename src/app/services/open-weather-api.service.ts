import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {WeatherData} from '../open-weather-data'
import { Observable, of } from 'rxjs';
import {environment} from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {


  constructor(private http: HttpClient) { }
  public fdata;
  weatherData: any;
  public currentCity = {
    name: "",
    code: "",
    lat: 0,
    lon: 0
  };
  getCurrentCity(){
    // console.log('get')
    // console.log(this.weatherData);
    return this.currentCity;
    
  }
  setCurrentCity(data){
    // console.log('set')
    // console.log(this.weatherData);
    this.currentCity = data;
  }
  getWeatherData(){
    // console.log('get')
    // console.log(this.weatherData);
    return this.weatherData;
    
  }
  setWeatherData(data){
    // console.log('set')
    // console.log(this.weatherData);
    this.weatherData = data;
  }
 getData(param1): Observable<WeatherData>{
   const param2 = {
 
      'appid': environment.appid
   }
   const finalparam = {...param1, ...param2};
  return this.http.get<WeatherData>(environment.URL,{params:finalparam});

 }

getJson(dataPath): Observable<any>{
  return this.http.get<any>(dataPath);
}
}
  