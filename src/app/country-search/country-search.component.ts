import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {OpenWeatherAPIService}from '../services/open-weather-api.service'
import {Router,NavigationExtras } from '@angular/router'
@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  public country;
  public filteredCountry;
  display = 'none';
  name: string = '';
  @Output() getSelectedCity = new EventEmitter<any>();
  constructor(private weather: OpenWeatherAPIService, private router: Router) { }

  ngOnInit() {
    this.weather.getJson().subscribe(data => this.country = data);

  }
  onSelect(name,code){

    const data = {
      name: name,
      code: code
    }
    this.getSelectedCity.emit(data);
    if(this.display =='none')
        this.display = "block";
        else
        this.display = "none";
  }
  
}
