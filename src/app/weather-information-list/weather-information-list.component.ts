import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-weather-information-list',
  templateUrl: './weather-information-list.component.html',
  styleUrls: ['./weather-information-list.component.scss']
})
export class WeatherInformationListComponent implements OnInit {
  t=[1,2,3,4,5]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onselect(id){
    this.router.navigate(['/details',id]);
  }
}
