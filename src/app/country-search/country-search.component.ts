import { Component, OnInit } from '@angular/core';
import {OpenWeatherAPIService}from '../services/open-weather-api.service'

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  public country;
  public filteredCountry;
  name: string = '';
  constructor(private weather: OpenWeatherAPIService) { }

  ngOnInit() {
    this.weather.getJson().subscribe(data => this.country = data);

  }

}
