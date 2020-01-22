import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { OpenWeatherAPIService } from '../../../services/open-weather-api.service'



@Component({
  selector: 'app-weather-information-list',
  templateUrl: './weather-information-list.component.html',
  styleUrls: ['./weather-information-list.component.scss']
})
export class WeatherInformationListComponent implements OnInit {
  public days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
  t = [ 1, 2, 3, 4]
  constructor(private router: Router, private optional: ActivatedRoute, private openWeatherData: OpenWeatherAPIService) { }
  public weatherData;
  public currentDate = new Date();
  display = "none";

  showModal()
  {
    if(this.display =='none')
      this.display  = 'block';
      else 
      this.display = 'none';
  }

  public currentCity = {
    name: "",
    code: "",
    lat: 0,
    lon: 0
  };


  ngOnInit() {
    this.currentCity = this.openWeatherData.getCurrentCity();
    this.weatherData = this.openWeatherData.getWeatherData();
    console.log("HHHHHHHHH",this.currentCity);
    this.currentDate = new Date();
    if (!this.currentCity.name && !this.currentCity.lat ) {
      this.getCurrentPos();
     //this.getWeatherByCoordinat(this.currentCity.lat, this.currentCity.lon);
    } else {
      this.getWeatherByCityName(this.currentCity.name, this.currentCity.code);
    }
    console.log(this.weatherData)
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
      if(data){
      this.weatherData = data;
      console.log(this.weatherData);
      this.openWeatherData.setWeatherData(data);

      }
      });
     
  }
  getWeatherByCoordinat(lat, lon) {
    const param = {
      'lat': lat,
      'lon': lon
      // 31.5076565
      // 35.091069
    }
    this.openWeatherData.getData(param)
      .subscribe(data => {
      this.weatherData = data;
      this.openWeatherData.setWeatherData(data);
        //console.log(data);
      });

  }

  getLocationData(data) {
    this.currentCity.name = data.name;
    this.currentCity.code = data.code;
    this.openWeatherData.setCurrentCity(this.currentCity);
    this.display = "none";
    this.getWeatherByCityName(data.name, data.code);
    
  }
  getDate(date){
    let newDate = new Date(date);
    return (newDate.getHours()+":00");
  }

  getCurrentPos() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(pos => {
        this.currentCity.lat = pos.coords.latitude;
        this.currentCity.lon = pos.coords.longitude;
        this.openWeatherData.setCurrentCity(this.currentCity);
        this.getWeatherByCoordinat(pos.coords.latitude,pos.coords.longitude)
      });
    }
  }

}
