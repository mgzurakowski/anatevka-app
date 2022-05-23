import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TimeHelperService } from 'src/app/shared/services/time-helper.service';

import { SunriseSunsetService } from './sunrise-sunset.service';

describe('SunriseSunsetService', () => {
  let service: SunriseSunsetService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let timeHelperSpy: jasmine.SpyObj<TimeHelperService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SunriseSunsetService(httpClientSpy, timeHelperSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
