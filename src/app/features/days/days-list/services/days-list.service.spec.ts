import { TestBed } from '@angular/core/testing';

import { DaysListService } from './days-list.service';

describe('DaysListService', () => {
  let service: DaysListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
