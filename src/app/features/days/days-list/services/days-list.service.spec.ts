import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GeolocationService } from 'src/app/shared/services/geolocation.service';
import { SunriseSunsetService } from 'src/app/shared/services/sunrise-sunset.service';
import { TimeHelperService } from 'src/app/shared/services/time-helper.service';

import { DaysListService } from './days-list.service';

describe('DaysListService', () => {
  let service: DaysListService;
  let timeHelperSpy: jasmine.SpyObj<TimeHelperService>;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;
  let SunriseSunsetServiceSpy: jasmine.SpyObj<SunriseSunsetService>;

  beforeEach(() => {
    timeHelperSpy = jasmine.createSpyObj('TimeHelperService', ['get']);
    geolocationServiceSpy = jasmine.createSpyObj('GeolocationService', ['get']);
    SunriseSunsetServiceSpy = jasmine.createSpyObj('SunriseSunsetService', ['get']);
    service = new DaysListService(timeHelperSpy, geolocationServiceSpy, SunriseSunsetServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
