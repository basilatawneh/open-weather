import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let OpenWeatherAPIService = class OpenWeatherAPIService {
    constructor(http) {
        this.http = http;
        this.URL = "";
        this.test = "assets/test.json";
    }
    getData() {
        return new Promise((resolve, reject) => {
            this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d30d77467a30193c2c22a5a607772a7a', { responseType: "json" }).subscribe(data => {
                resolve(data);
            });
        });
    }
};
OpenWeatherAPIService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OpenWeatherAPIService);
export { OpenWeatherAPIService };
//# sourceMappingURL=open-weather-api.service.js.map