import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationListComponent } from './weather-information-list.component';

describe('WeatherInformationListComponent', () => {
  let component: WeatherInformationListComponent;
  let fixture: ComponentFixture<WeatherInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
