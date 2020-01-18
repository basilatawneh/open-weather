import { Component, OnInit } from '@angular/core';
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
  name: string = '';
  constructor(private weather: OpenWeatherAPIService, private router: Router) { }

  ngOnInit() {
    this.weather.getJson().subscribe(data => this.country = data);

  }
  onSelect(name,code){

    const data = {
      name: name,
      code: code
    }
    this.router.navigate(["home",{
      name: name,
      code: code}]);
  }
}
