import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router'
import {OpenWeatherAPIService } from '../../../../services/open-weather-api.service'
@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ro:Router, private OpenWeather: OpenWeatherAPIService) { }
  public dataid:number;
  weatherDatainfo:any ;
  ngOnInit() {
    this.dataid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.weatherDatainfo = this.OpenWeather.getWeatherData();
    console.log(this.weatherDatainfo.list[this.dataid].main.temp - 273.15);
  }
  prev(){
    this.dataid--;
    this.ro.navigate(['/details',this.dataid]);
  }
  next(){
    this.dataid++;
    this.ro.navigate(['/details',this.dataid]);
  }
}
