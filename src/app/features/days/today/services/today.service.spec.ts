import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GeocodingService } from 'src/app/shared/services/geocoding.service';
import { GeolocationService } from 'src/app/shared/services/geolocation.service';
import { SunriseSunsetService } from 'src/app/shared/services/sunrise-sunset.service';

import { TodayService } from './today.service';

describe('TodayService', () => {
  let service: TodayService;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;
  let geocodingServiceSpy: jasmine.SpyObj<GeocodingService>;
  let sunriseSunsetServiceSpy: jasmine.SpyObj<SunriseSunsetService>;


  beforeEach(() => {
    geolocationServiceSpy = jasmine.createSpyObj('GeolocationService', ['get']);
    geocodingServiceSpy = jasmine.createSpyObj('GeocodingService', ['get']);
    sunriseSunsetServiceSpy = jasmine.createSpyObj('SunriseSunsetService', ['get']);
    service = new TodayService(geolocationServiceSpy, geocodingServiceSpy, sunriseSunsetServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
