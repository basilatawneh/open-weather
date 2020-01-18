import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { OpenWeatherAPIService } from '../../services/open-weather-api.service'
import { parse } from 'querystring';

@Component({
  selector: 'app-weather-information-list',
  templateUrl: './weather-information-list.component.html',
  styleUrls: ['./weather-information-list.component.scss']
})
export class WeatherInformationListComponent implements OnInit {
  public days = ['a','b','c','d','e','f','g'];
  t = [0, 1, 2, 3, 4]
  constructor(private router: Router, private optional: ActivatedRoute, private openWeatherData: OpenWeatherAPIService) { }
  public weatherData;
  public currentDate = new Date();
  public currentCity = {
    name: "",
    code: "",
    lat: 0,
    lon: 0
  };
  ngOnInit() {
    /*this.openWeatherData.getcurrentGeoWeather()
      .subscribe( data => this.weatherData = data );
    console.log(this.weatherData);*/
    console.log(this.currentCity);
    this.currentDate = new Date();
    this.getUrlParam();
    if (!this.currentCity.name ) {
      this.getCurrentPos();
      this.getWeatherByCoordinat(this.currentCity.lat, this.currentCity.lon);
    } else {
      this.getWeatherByCityName(this.currentCity.name, this.currentCity.code);
    }
  }
  onselect(id) {
    this.router.navigate(['/details', id]);
  }
  getWeatherByCityName(cityName, countryCode) {
    const param = {
      'q': cityName + ',' + countryCode
    }
    this.openWeatherData.getData(param)
      .subscribe(data => {
      this.weatherData = data;
        console.log(data);
      });

  }
  getWeatherByCoordinat(lat, lon) {
    const param = {
      'lat': lat,
      'lon': lon
    }
    this.openWeatherData.getData(param)
      .subscribe(data => {
      this.weatherData = data;
        console.log(data);
      });

  }

  getUrlParam() {
    this.currentCity.name = (this.optional.snapshot.paramMap.get('name'));
    this.currentCity.code = (this.optional.snapshot.paramMap.get('code'));
    console.log(this.currentCity);
  }


  getCurrentPos() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(pos => {
        this.currentCity.lat = pos.coords.latitude;
        this.currentCity.lon = pos.coords.longitude;
      });
    }
  }
}
