import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let WeatherInformationComponent = class WeatherInformationComponent {
    constructor(openWeatherData) {
        this.openWeatherData = openWeatherData;
    }
    ngOnInit() {
        this.openWeatherData.getData().then(data => {
            console.log(data);
        });
    }
    getinfo() {
        // return this.openWeatherData.getData().subscribe(data => this.data2 = data);
    }
};
WeatherInformationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-weather-information',
        templateUrl: './weather-information.component.html',
        styleUrls: ['./weather-information.component.scss']
    })
], WeatherInformationComponent);
export { WeatherInformationComponent };
//# sourceMappingURL=weather-information.component.js.map