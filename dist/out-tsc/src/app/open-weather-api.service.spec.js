import { TestBed } from '@angular/core/testing';
import { OpenWeatherAPIService } from './open-weather-api.service';
describe('OpenWeatherAPIService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(OpenWeatherAPIService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=open-weather-api.service.spec.js.map