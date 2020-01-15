import { TestBed } from '@angular/core/testing';

import { OpenWeatherAPIService } from './services/open-weather-api.service';

describe('OpenWeatherAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWeatherAPIService = TestBed.get(OpenWeatherAPIService);
    expect(service).toBeTruthy();
  });
});
