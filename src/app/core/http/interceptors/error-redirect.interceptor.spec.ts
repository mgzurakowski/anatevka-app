import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorRedirectInterceptor } from './error-redirect.interceptor';

describe('ErrorRedirectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    providers: [
      ErrorRedirectInterceptor,
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorRedirectInterceptor = TestBed.inject(ErrorRedirectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
